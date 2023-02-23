import Button from "./Button"
export function Action({cont,setCounter, action}){
    const event=action==='Suma'?()=>{ setCounter(cont + 1) } : ()=>{ setCounter(cont - 1) }
    return <Button text={action} event={event}/>

}