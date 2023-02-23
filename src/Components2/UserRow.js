import { useState } from "react";
import Button from "./../Components/Button"
import "./../CSS/UserRow.css"
export function UserRow({name,lname,mail,img,isActive,index,deleteUser,id}){
    var active=isActive;
    const [cname,setCName]=useState("img_".concat(isActive?"active" :"not_active"))
    const changeState=(state)=>{
        active=state;
        console.log(active)
        setCName("img_".concat(active?"active" :"not_active"))
    }
    return <div key={index} >
        <img src={img} id={id} className={cname}/>
        <a>{name} {lname}({mail}).</a>
        <Button id="validate" className={isActive?"active":"not_active"} icon="validate icon" event={()=>{changeState(true)}}/>
        <Button id="invalidate" className={isActive?"active" :"not_active"} icon="invalidate icon" event={()=>{changeState(false)}}/>
        <Button event={deleteUser} icon="trash icon"/></div>
}