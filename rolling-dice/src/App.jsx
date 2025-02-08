import { useState } from "react";

function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const [dice, setDice] = useState([0, 0]);
  const [isDisplayingResult, setIsDisplayingResult] = useState(false);

  const handleRollDice = () => {
    setDice([randomNumberGenerator(1, 6), randomNumberGenerator(1, 6)]);
    setIsDisplayingResult(true);
    setTimeout(() => {
      setIsDisplayingResult(false);
    }, 2000);
  };

  return (
    <div className="container">
      {dice.map((die, idx) => (
        <Die die={die} key={idx} />
      ))}
      <Control
        dice={dice}
        handleRollDice={handleRollDice}
        isDisplayingResult={isDisplayingResult}
      />
    </div>
  );
}

function Die({ die }) {
  return (
    <div className="dice-container">
      <img src={`/images/dice-${die}.png`} alt={`image of dice-${die}`} />
    </div>
  );
}

function Control({ dice, isDisplayingResult, handleRollDice }) {
  const rolledDice = dice.reduce((result, curr) => result + curr, 0);
  return (
    <button
      className="control-btn"
      onClick={handleRollDice}
      disabled={isDisplayingResult}
    >
      {isDisplayingResult ? `You Rolled ${rolledDice}` : `Roll Dice`}
    </button>
  );
}

export default App;
