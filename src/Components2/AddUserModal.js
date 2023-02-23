import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { TextField } from '@mui/material';
import "./../CSS/AddUserModal.css"
import { useState } from 'react';
import { CheckBox } from '@mui/icons-material';

export function AddUser({addUser,updateUsers,counter,open, setOpen}){
    var [is_active,setIsActive] = useState(null);
    const OnSubmit=(e)=>{
        console.log(document.getElementById("active").checked)
        setIsActive(document.getElementById("active").checked)
        var newUser={
            name: document.getElementById("name").value,
            lname:document.getElementById("lname").value,
            mail:document.getElementById("mail").value,
            image: document.getElementById("image").value,
            isActive:document.getElementById("active").checked,
            id:counter+"name"
        }
        addUser(newUser)
        updateUsers(1)
        setOpen(false)
    }
    const handleChange=()=>{
        document.getElementById("active").checked=(!(document.getElementById("active").checked))
        console.log("change"+document.getElementById("active").checked)
    }
    return <form id="modal" className="addUser" style={ open?{display: "block"}:{display: "none"} }>
        <TextField id="name" label="Nombre" type="text"></TextField>
        <TextField id="lname" label="Apellido" type="text"></TextField>
        <TextField id="image" label="Imagen(URL)" type="text" defaultValue="https://robohash.org/user"></TextField>
        <TextField id="mail" label="Correo" type="mail" variant="outlined"></TextField>
        <Checkbox
        label="Label"
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}>Activo</Checkbox>
        <input hidden={true} id='active' type="checkbox"></input>
        <Button variant="outlined" onClick={OnSubmit}>Guardar</Button>
        </form>
}