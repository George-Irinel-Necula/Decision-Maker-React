import { useEffect, useRef, useState } from "react"

export default function AddChoice({addObj,totalChance}){
    const [name,setName]=useState("")
    const [chance,setChance]=useState(null)

    useEffect(()=>{console.log(chance)},[chance])
    return(
        <div style={{padding:"1rem"}}>
        <h1>Adauga valori pe roata:</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Valoare" />
        <input type="number" min={0} max={100} value={chance} onChange={(e)=>setChance(e.target.value==""?null:Number(e.target.value))}  placeholder="Chance%" style={{borderRadius:0,width:"100px"}}/>
        <button onClick={()=>addObj(name,chance)} disabled={Number(totalChance+chance)>100||name==""||chance==null||chance<0?true:false}  style={{borderRadius:0}}>Adauga</button>
        <button>Gamble</button>
        </div>

    )
}