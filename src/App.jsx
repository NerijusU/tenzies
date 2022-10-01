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
  // console.log(allNewDice());

  const [dice, setDice] = useState(allNewDice());

  const diceElements = dice.map((die) => <Die value={die} />);

  const rollDice = async () => {
    setDice(allNewDice());
  };

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
