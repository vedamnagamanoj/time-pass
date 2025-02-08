import styles from "./HangmanWord.module.css";

type HangmanWordTypes = {
  word: string;
  isLoser: boolean;
  guessedLetters: string[];
};

function HangmanWord({ word, isLoser, guessedLetters }: HangmanWordTypes) {
  return (
    <div className={styles.word}>
      {word.split("").map((ch, idx) => (
        <span className={styles.letter} key={idx + 1}>
          {" "}
          <span
            className={`${
              guessedLetters.includes(ch) || isLoser
                ? styles.visible
                : styles.hidden
            } ${
              !guessedLetters.includes(ch) && isLoser
                ? styles.red
                : styles.black
            }`}
          >
            {" "}
            {ch}{" "}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
