import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
function App() {
  const [usersList , setusersList] = useState([]);
  const addUserHandler = (uName , uAge) =>{
    setusersList((prevUsersList)=>{
      return[...prevUsersList , {name:uName , age:uAge , id:Math.random().toString()}]
    });
  } 
  return (
   <>
   <AddUser onAddUser={addUserHandler}></AddUser>
   <UsersList users={usersList}/>
   </>
  );
}

export default App;
