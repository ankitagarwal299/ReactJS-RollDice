import React, { useState } from "react";
const dotMap = {
  "1": ["center"],
  "2": ["top-left", "bottom-right"],
  "3": ["top-left", "center", "bottom-right"],
  "4": ["top-left", "bottom-left", "top-right", "bottom-right"],
  "5": ["top-left", "bottom-left", "center", "top-right", "bottom-right"],
  "6": [
    "top-left",
    "bottom-left",
    "left-center",
    "top-right",
    "right-center",
    "bottom-right"
  ]
};

export default function Dice({ number }) {
  /*
  function getRandomGenerate() {
    return Math.floor(Math.random() * 6) + 1;
  }
*/
  /*State inside cons: On click of Roll btn dices are not changing there number */
  // const [face, setFace] = useState(getRandomGenerate());

  return (
    <div className="dice">
      <div className="dice-inner">
        {dotMap[number].map((clsName, clsIndex) => (
          <div id={clsIndex} key={clsIndex} className={`dot ${clsName}`}></div>
        ))}
      </div>
    </div>
  );
}
