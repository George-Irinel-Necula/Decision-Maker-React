import { useState } from 'react'
import BasicPie from './BasicPie'
import "./App.css"
import Interact from './Interact'


function App() {
  const [chance,setChance]=useState(0)
  const [animation,setAnimation]=useState("")
  const [rotation,setRotation]=useState(0)
  const [alreadyPressed,setAlreadyPressed]=useState(false)

  function play(){
    
    if(alreadyPressed){
      setAnimation("")
    }
    const chance=Math.floor(Math.random() * 10);
    if(chance<=4){
      const rotationVar=Math.floor(Math.random() * 180);
      setRotation(rotationVar+1440)
    }
    else{
      const rotationVar=180+Math.floor(Math.random() * 180);
      setRotation(rotationVar+1440)
    }
    setTimeout(setAnimation("spin 4s ease-out"),1000)
    setAlreadyPressed(true)
}


  return (
    <>
   <Interact play={play}></Interact>
   <BasicPie animation={animation} rotation={rotation} still={rotation}></BasicPie>
    </>
  )
}

export default App
