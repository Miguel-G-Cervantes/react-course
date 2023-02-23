export default function Button({text,event,icon}){
    const hasIcon= icon!=null?  <div className={icon}></div>:"";
    return <button onClick={event} >{text} {hasIcon}</button>
}