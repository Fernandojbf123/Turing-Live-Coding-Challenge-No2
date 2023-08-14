
import { useState } from "react";

//this url is temporal, it should be in enviromental variable
let url = "https://randomuser.me/api/?results=1000";

const SyncWithAPIButton = ({setContactList}) => {

  //this component connects to the API and then save the contact list in the prop "contactList" which comes from APP->Header

    let [isSyncing, setIsSyncing] = useState(false)

    const getContacts = async () => {
        console.log("Fetching contacts from API")
        setIsSyncing(true)

        try {
            const response = await fetch(url)
            const result = await response.json()
            setContactList(result.results)
            setIsSyncing(false)
            return result
            
        } catch (error) {
            console.log(error)       
        }
    }


  return (
    <div>
      {!isSyncing ? (
        <button 
          className="p-2 bg-slate-400 rounded-md shadow-md hover:bg-slate-200 w-[100px] h-[40px] text-gray-700 font-bold"
          onClick={ () => getContacts()}>Sync</button>
      ):(
        <button 
          className="p-2 bg-slate-400 rounded-md shadow-md hover:bg-slate-200 w-[150px] h-[40px] text-gray-700 font-bold"
          disabled={true}>Sync in process</button>
      )}
      
    </div>
  )
}

export default SyncWithAPIButton



