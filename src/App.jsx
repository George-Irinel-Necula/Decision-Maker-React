import { useEffect, useState } from "react";
import CustomPieChart from "./CustomPieChart";
import "./App.css";
import AddChoice from "./AddChoice";

export default function App() {
  const [animation, setAnimation] = useState("none");
  const [rotation, setRotation] = useState(0);
  const [alreadyPressed, setAlreadyPressed] = useState(false);

  const [inProgress, setInProgress] = useState(false);

  const [winner, setWinner] = useState("");
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const [choices, setChoices] = useState([
    { id: 0, value: 50, label: "Da", color: "#09C84C", interval: [1, 50] },
    { id: 1, value: 50, label: "Nu", color: "#F52C2C", interval: [51, 100] },
  ]);

  const [currentTotalChance, setCurrentTotalChance] = useState(0);
  const [defaultChoice,setDefaultChoices]=useState(true)

  function reset() {
    const choicesCopy = [
      {
        id: 0,
        value: 50,
        label: "Da",
        color: "#09C84C",
        interval: [1, 50],
      },
      {
        id: 1,
        value: 50,
        label: "Nu",
        color: "#F52C2C",
        interval: [51, 100],
      },
    ];

    setChoices(choicesCopy);
    setCurrentTotalChance(0);
    setRotation(0)
    setDefaultChoices(true)
    setInProgress(false)
  }

  function addObj(valoare, sansa) {
    const choicesCopy = [...choices];
    setDefaultChoices(false)
    if (choicesCopy[0].label === "Da" && choicesCopy[1].label === "Nu") {
      choicesCopy.pop();
      choicesCopy.pop();
    }

    let newTotal = 0;

    choicesCopy.push({
      id: choicesCopy.length,
      label: `${choicesCopy.length+"."+valoare} (${sansa}%)`,
      value: sansa,
      interval: [currentTotalChance + 1, sansa + currentTotalChance],
    });

    setChoices(choicesCopy);

    for (let i = 0; i < choicesCopy.length; i++) {
      newTotal += Number(choicesCopy[i].value);
    }

    setCurrentTotalChance(newTotal);
  }

  function randomChoice() {
    const random = Math.floor(Math.random() * 100) + 1;
    let returned = [];

    for (let i = 0; i < choices.length; i++) {
      if (random >= choices[i].interval[0] && random <= choices[i].interval[1]) {
        returned = [
          choices[i].id,
          choices[i].label,
          choices[i].interval[0],
          choices[i].interval[1],
        ];
      }
    }

    return returned;
  }

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
  }, [alreadyPressed, winner, screenSize]);

  function play() {
    setInProgress(true);

    const winnerInfo = randomChoice();
    console.log(winnerInfo);

    const rotationVar =
      winnerInfo[2] +
      Math.floor(Math.random() * (winnerInfo[3] - winnerInfo[2])) +
      1;

    const rotationDegrees = Math.floor(rotationVar * 3.6);

    console.log("Rotation:" + rotationVar + " " + rotationDegrees);

    setTimeout(() => setWinner(winnerInfo[1]), 4000);

    setRotation(rotationDegrees + 1440);

    if (alreadyPressed) {
      setAnimation("none");
      setTimeout(() => setAnimation("spin 4s ease-out"), 10);
    } else {
      setAnimation("spin 4s ease-out");
    }

    setAlreadyPressed(true);

    setTimeout(() => setInProgress(false), 4000);
  }

  useEffect(()=>{console.log(defaultChoice)},[defaultChoice])

  return (
    <>
      <AddChoice
        addObj={addObj}
        reset={reset}
        gamble={play}
        currentTotalChance={currentTotalChance}
        winner={winner}
        inProgress={inProgress}
        defaultChoice={defaultChoice}
      ></AddChoice>

      <CustomPieChart
        animation={animation}
        rotation={rotation}
        still={rotation}
        alreadyPressed={alreadyPressed}
        width={screenSize > 1000 ? 400 : 300}
        height={screenSize > 1000 ? 400 : 300}
        innerRadius={screenSize > 1000 ? 100 : 75}
        data={choices}
      ></CustomPieChart>

      <p>
        <b>Sansa Totala:</b> {defaultChoice?"100%":(currentTotalChance + " din 100%")}
      </p>
    </>
  );
}
