export default function Interact({play,winner,trigger}){
    return(
        <div style={{padding:"1rem"}}>
            <h1>Merg azi la facultate?</h1>
            <h2>Castigator:{winner}</h2>
            <button onClick={play} disabled={trigger ? true : false}>Gamble</button>
        </div>
    )
}