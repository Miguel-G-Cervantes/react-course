import { UserRow } from "./UserRow";
export function UserList({users,deleteUser,activeUser}){
    return (
    <div id="list">
        {users.map((user, index)=> (
        <div key={index} id={index}>
            <UserRow id={index} index={index} name={user.name} lname={user.lname} mail={user.mail} img={user.image} isActive={user.isActive} deleteUser={()=>deleteUser(user.id)}/>
        </div>
    ))}
    </div>)
}