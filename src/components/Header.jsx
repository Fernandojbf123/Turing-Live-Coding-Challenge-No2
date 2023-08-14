import SyncWithAPIButton from "./SyncWithAPIButton"

const Header = ({setContactList}) => {

  //Header component 
  return (
    <div className="p-3 bg-gray-600 flex flex-row justify-between">
      <div><h1 className="text-2xl font-bold text-white">Welcome</h1></div>
      <input type="text" />
      <SyncWithAPIButton 
        setContactList={setContactList}/>
    </div>
  )
}

export default Header
