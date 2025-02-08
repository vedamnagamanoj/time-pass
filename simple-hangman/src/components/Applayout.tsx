import { useState } from "react";
import styles from "./Applayout.module.css";
import HangmanBody from "./HangmanBody";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";

import words from "../../data/wordList.json";

const setRandomWord = () => {
  const word = words[Math.round(Math.random() * words.length)].toUpperCase();

  console.log(word);
  return word;
};

function Applayout() {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [word] = useState<string>(setRandomWord);

  const incorrectLetters = guessedLetters.filter((ch) => !word.includes(ch));
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = word.split("").every((ch) => guessedLetters.includes(ch));

  const addGuessedLetter = (ch: string): void => {
    if (guessedLetters.includes(ch) || isWinner || isLoser) return;

    setGuessedLetters((currLetters) => [...currLetters, ch]);
  };

  return (
    <div className={styles.container}>
      <p className={styles.heading}>
        {isWinner && "You won!"}
        {isLoser && "You Lost"}
        {!isWinner && !isLoser && "Welcome to hangman game"}
      </p>
      <HangmanBody incorrectGuesses={incorrectLetters.length} />
      <HangmanWord
        word={word}
        guessedLetters={guessedLetters}
        isLoser={isLoser}
      />
      <Keyboard
        guessedLetters={guessedLetters}
        addGuessedLetter={addGuessedLetter}
        gameOver={isLoser || isWinner}
      />
    </div>
  );
}

export default Applayout;
