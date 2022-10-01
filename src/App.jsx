import { useState } from "react";
import Die from "./components/Die";

function App() {
  const allNewDice = () => {
    // new array to hold my numbers
    const newDice = [];
    // loop 10 times
    for (let i = 0; i < 10; i++) {
      // push a random number from 1-6 to my array
      newDice.push(Math.ceil(Math.random() * 6));
    }
    // return array
    return newDice;
  };
  console.log(allNewDice());

  return (
    <main>
      <div className="dice-container">
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
        <Die value="5" />
        <Die value="6" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
      </div>
    </main>
  );
}

export default App;
