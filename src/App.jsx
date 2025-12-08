import { useEffect, useState } from "react";
import CustomPieChart from "./CustomPieChart";
import "./App.css";
import Interact from "./Interact";

function App() {
  const [animation, setAnimation] = useState("none");
  const [rotation, setRotation] = useState(0);
  const [alreadyPressed, setAlreadyPressed] = useState(false);
  const [trigger,setTrigger]=useState(false)
  const [winner,setWinner]=useState("")
  const [screenSize,setScreenSize]=useState(window.innerWidth)
  const [variants,setVariant]=useState([
            { id: 0, value: 50, label: 'Nu',color:"#09C84C" },
            { id: 1, value: 50, label: 'Da',color:"#F52C2C" },
          ])
  useEffect(() => {
    console.log(screenSize)
    const handleResize=()=>setScreenSize(window.innerWidth)
    window.addEventListener("resize", handleResize);
  }, [alreadyPressed,winner,screenSize]);

  function play() {
    setTrigger(true)
    const chance = Math.floor((Math.random() * 10)+1);
    console.log(chance)
    if (chance >= 5) {
      const rotationVar = 180 + Math.floor(Math.random() * 180);
      setRotation(rotationVar + 1440);
      setTimeout(()=>{setWinner("Nu")},4000)
    } else {
      const rotationVar = Math.floor(Math.random() * 180);
      setRotation(rotationVar + 1440);
      setTimeout(()=>{setWinner("Da")},4000)
    }
    if (alreadyPressed) {
      setAnimation("none");
      setTimeout(() => {
        setAnimation("spin 4s ease-out");
      }, 10);
    } else {
        setAnimation("spin 4s ease-out");
    }
    setAlreadyPressed(true);
    setTimeout(()=>{setTrigger(false)},4000)
  }

  return (
    <>
      <Interact play={play} winner={winner} trigger={trigger}></Interact>
      <CustomPieChart
        animation={animation}
        rotation={rotation}
        still={rotation}
        alreadyPressed={alreadyPressed}
        width={screenSize>1000?400:300}
        height={screenSize>1000?400:300}
        innerRadius={screenSize>1000?100:75}
        data={variants}
      ></CustomPieChart>
      
    </>
  );
}

export default App;
