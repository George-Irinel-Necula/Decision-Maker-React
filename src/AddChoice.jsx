import { useEffect, useState } from "react";

export default function AddChoice({ addObj, currentTotalChance, gamble, reset, winner, inProgress,defaultChoice }) {
    const [name, setName] = useState("");
    const [chance, setChance] = useState(null);

    useEffect(() => {
        console.log(chance);
    }, [chance]);

    return (
        <div style={{ padding: "1rem" }}>
            <h1>Adauga valori pe roata:</h1>
            <h2>Castigator: {winner}</h2>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Valoare"
                style={{ width: "8rem" }}
            />

            <input
                type="number"
                min={0}
                max={100}
                value={chance}
                onChange={(e) =>
                    setChance(e.target.value === "" ? null : Number(e.target.value))
                }
                placeholder="Chance%"
                style={{ borderRadius: 0, width: "6rem", marginBottom: "1rem" }}
            />
            <br />

            <button
                onClick={() => addObj(name, chance)}
                disabled={
                    Number(currentTotalChance + chance) > 100 ||
                    name === "" ||
                    chance === null ||
                    chance < 0
                }
                style={{ borderRadius: "10px 0px 0px 10px", backgroundColor: "#21471d" }}
            >
                Adauga
            </button>

            <button onClick={reset} style={{ borderRadius: 0, backgroundColor: "#471d1d" }}>
                Reset
            </button>

            <button onClick={gamble} disabled={inProgress||currentTotalChance<100?true:false}>
                Gamble
            </button>
        </div>
    );
}
