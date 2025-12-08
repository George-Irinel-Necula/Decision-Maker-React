import { useEffect, useState } from "react";
import CustomPieChart from "./CustomPieChart";
import "./App.css";
import Interact from "./Interact";
import { Link } from "react-router";
import AddChoice from "./AddChoice";

export default function MultipleChoice() {
  const [animation, setAnimation] = useState("none");
  const [rotation, setRotation] = useState(0);
  const [alreadyPressed, setAlreadyPressed] = useState(false);
  const [trigger,setTrigger]=useState(false)
  const [winner,setWinner]=useState("")
  const [screenSize,setScreenSize]=useState(window.innerWidth)
  const [variants,setVariant]=useState([
            { id: 0, value: 50, label: 'Exemplu'},
            { id: 1, value: 50, label: 'Exemplu'},
          ])
  const [totalChance,setTotalChance]=useState(0)


   function addObj(valoare,sansa){
        const variantsCopy=[...variants]
        if (variantsCopy[0].label=="Exemplu"){
            variantsCopy.pop()
            variantsCopy.pop()
        }
        variantsCopy.push({id:variantsCopy.length,label:valoare+" ("+sansa+ "%)",value:sansa})
        setVariant(variantsCopy)
        let totalChanceCopy=0
        for(let i=0;i<variantsCopy.length;i++){
            totalChanceCopy+=Number(variantsCopy[i].value)
        }
        setTotalChance(totalChanceCopy)
    }

    function randomChoice(){

    }


  useEffect(() => {
    console.log(screenSize)
    const handleResize=()=>setScreenSize(window.innerWidth)
    window.addEventListener("resize", handleResize);
  }, [alreadyPressed,winner,screenSize]);

  useEffect(()=>{console.log(totalChance)},[totalChance])

  function play() {
    
  }

  return (
    <>
      <AddChoice addObj={addObj} totalChance={totalChance}></AddChoice>
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
      <p><b>Sansa Totala:</b>{totalChance+" din 100%"}</p>
      <Link to={"/Decision-Maker-React"}>Go back</Link>
    </>
  );
}