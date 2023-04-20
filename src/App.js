import { useState } from "react";
import Dice from "./Dice";
import "./styles.css";

export default function App() {
  const [totalDice, setTotalDice] = useState(null);
  const [diceList, setDiceList] = useState([]);
  //required to throw dice on button click and not on entering number

  function handleTotalDice(e) {
    if (e.target.value && e.target.value > 0) {
      let noOfDice = parseInt(e.target.value, 10);
      if (noOfDice < 0 || noOfDice > 99) return;
      setTotalDice(noOfDice);
    } else {
      setTotalDice(null);
    }
  }

  function rollDice() {
    const diceList = [...Array(totalDice)].map((dice, diceIndex) => {
      return Math.floor(Math.random() * 6) + 1;
    });
    setDiceList(diceList);
    console.log(diceList);
  }

  return (
    <div className="App">
      <h1>Roller Application</h1>

      <div className="container">
        <div className="header">
          <label htmlFor="dice-input">Number of Dice</label>

          <input
            id="dice-input"
            type="number"
            placeholder="Enter number of dice"
            onChange={handleTotalDice}
          ></input>

          <button
            type="button"
            id="rollBtn"
            className="rollBtn"
            onClick={rollDice}
          >
            Roll
          </button>
        </div>

        <div className="dice-container" id="dice-container">
          {/* {totalDice &&
            [...Array(totalDice)].map((dice, diceIndex) => (
              <Dice key={diceIndex} id={diceIndex} />
            ))} */}

          {diceList.map((number, diceIndex) => (
            <Dice key={diceIndex} id={diceIndex} number={number} />
          ))}
        </div>
      </div>
    </div>
  );
}
