import './App.css';
import './Components/Action';
import React, { useState, useEffect } from "react";
import {Header} from './Components2/Header'
import { UserList } from './Components2/UserList';
import {AddUser} from './Components2/AddUserModal';
import { UserRow } from './Components2/UserRow';
function App() {
  const [is_active1,setIsActive1] = useState(true)
  const [is_active2,setIsActive2] = useState(false)
  const data=[
  {
    name: "socrates",
    lname: "lopez",
    mail :"correo@mail.com",
    image:"https://robohash.org/user1",
    isActive: is_active1,
    setIsActive:setIsActive1,
    id: 0
  },
  {
    name: "olivares",
    lname: "oline",
    mail :"correo@mail.com",
    image:"https://robohash.org/user1",
    isActive: is_active2,
    setIsActive:setIsActive2,
    id:1
  }]
  const [users,setUsers]=useState([]);
  useEffect(()=>{setUsers(data)},[])
  
  function addUser(newUser){ setUsers([...users,newUser]); return users.length}

  const [counter, setCounter] = useState(data.length)
  function updateUsers(n){setCounter(counter+n)}
  
  const [open,setOpen]=useState(false)

  function deleteUser(index){
    console.log(index)
    updateUsers(-1)
    console.log(index)
    setUsers(users.filter(n=> n.id!=index))
  }
  function activeUser(index){
    users.map((user)=> {
      if(user.id==index){
        console.log(user.isActive)
        console.log(user.id)
        user.setIsActive(false)
      }
    })

    
  }
  return (
    <div className="App">
        <Header text={"User Manager"} cont={counter} setOpen={setOpen}/>
        <AddUser addUser={addUser} open={open} updateUsers={updateUsers}  counter={counter} setOpen={setOpen}/>
        <UserList users={users} deleteUser={deleteUser} activeUser={activeUser}/>
    </div>
  );
}
export default App;
