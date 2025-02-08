import styles from "./Keyboard.module.css";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

type KeyboardTypes = {
  gameOver: boolean;
  guessedLetters: string[];
  addGuessedLetter: (ch: string) => void;
};

function Keyboard({
  gameOver,
  guessedLetters,
  addGuessedLetter,
}: KeyboardTypes) {
  return (
    <div className={styles.keyboard}>
      {alphabets.map((ch) => (
        <button
          className={styles.keys}
          key={ch}
          onClick={() => addGuessedLetter(ch)}
          disabled={guessedLetters.includes(ch) || gameOver}
        >
          {ch}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
