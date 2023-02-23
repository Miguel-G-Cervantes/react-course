import Button from '@mui/material/Button';
import "./../CSS/Header.css"
import { useState } from "react"

export function Header({text,cont,setOpen}){
    const handleOnClick=()=>{
        const element =document.getElementById("modal")
        element.removeAttribute("style")
        setOpen(true)
    }
    return <div className="header"><h1><div>{text}({cont})</div></h1><Button variant="contained" onClick={handleOnClick}>Agregar</Button></div>
}