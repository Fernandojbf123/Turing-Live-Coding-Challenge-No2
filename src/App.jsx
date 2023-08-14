import { useEffect, useState } from "react";
import Footer from "./components/Footer"
import Header from "./components/Header"
import ShowTenContacts from "./components/ShowTenContacts";

function App() {

  //The url is here just for educational purposes (it should be in an enviromental variable)
  let url = "https://randomuser.me/api/?results=1000";

  let [contactList, setContactList] = useState( JSON.parse(localStorage.getItem("contactList")) ?? []);
  let [page, setPage] = useState(1);


  useEffect ( () => {
    localStorage.setItem("contactList", JSON.stringify(contactList))
  },[contactList])


 function changePage (amount) {

  setPage( currentValue => {
    
    let tmp = currentValue + amount;
    if (tmp < 1 || tmp === 102) {
      return currentValue
    }
    return tmp

    
  })
 }

  return (
    <>
      <div className="w-full mx-auto">
        <Header
          setContactList={setContactList}
        />

        <section className="w-full bg-slate-200">
          <p className="ml-5 pt-5 text-slate-600 font-bold text-xl">Page Nº: {page}</p>
          <ShowTenContacts
            contactList={contactList}
            page={page}
          />

          <div className="flex flex-row gap-5">
            <button 
              className="p-2 bg-slate-400 rounded-md shadow-md hover:bg-slate-200 w-[150px] h-[40px] text-gray-700 font-bold"
              onClick={() => changePage(-1)}>Previous Page</button>
            <button 
              className="p-2 bg-slate-400 rounded-md shadow-md hover:bg-slate-200 w-[150px] h-[40px] text-gray-700 font-bold"
              onClick={() => changePage(1)}>Next Page</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default App
