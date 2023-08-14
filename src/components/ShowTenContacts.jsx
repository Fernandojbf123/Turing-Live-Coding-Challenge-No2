import { useEffect, useState } from "react"


const ShowTenContacts = ({contactList, page}) => {
  

    let [filteredList, setFilteredList] = useState([]);


    useEffect ( () => {
        if (Object.keys(contactList).length>0) {
            getTenContacts(contactList,page)
        }
    },[contactList,page])

    const getTenContacts = (contactList, page) => {
        let lastIdx = page*10-1;
        let initialIdx = lastIdx-9;
        let tmpContacts = [];

        for (let i = initialIdx; i<=lastIdx; i++) {
            tmpContacts.push(contactList[i])
        }
        setFilteredList(tmpContacts)

    }


  
    return (
    
    <div className="w-full h-full">
        <ul className="p-5">
            {filteredList.map ( contact => (
                <li 
                    className="mt-3"
                    key={contact.email}>
                    <figure className="flex flex-row gap-2 items-center">
                        <img src={contact.picture.medium} alt={`Not found`}/>
                        <figcaption>{`${contact.name.first} ${contact.name.last}`}</figcaption>
                    </figure>
                    
                </li>
                
            ))}
        </ul>
    </div>
  )
}

export default ShowTenContacts
