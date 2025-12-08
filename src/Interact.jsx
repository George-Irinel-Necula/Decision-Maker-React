import { useRef, useState } from "react"

export default function Interact({play,winner,trigger}){
    

    const[choice,setChoice]=useState("")
    return(
        <div style={{padding:"1rem"}}>
            
            <h1>{choice+"?"}</h1>
            <form action="" style={trigger ? { display:'none'}:{display:'inherit'}}>
                <input type="text" value={choice} onChange={(e)=>setChoice(e.target.value)} placeholder="Ce vrei sa decizi?" required/>
                <button onClick={play} disabled={trigger || choice == "" ? true : false}>Gamble</button>
            </form>
            <h2>Castigator:{winner}</h2>
        </div>
    )
}