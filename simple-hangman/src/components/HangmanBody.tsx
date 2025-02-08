import styles from "./HangmanBody.module.css";

const Head = <div className={styles.head} key={1} />;
const Body = <div className={styles.body} key={2} />;
const RightArm = <div className={styles.rightArm} key={3} />;
const LeftArm = <div className={styles.leftArm} key={4} />;
const RightLeg = <div className={styles.rightLeg} key={5} />;
const LeftLeg = <div className={styles.leftLeg} key={6} />;

const parts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];
type HangmanBodyType = {
  incorrectGuesses: number;
};
function HangmanBody({ incorrectGuesses }: HangmanBodyType) {
  return (
    <div className={styles.hangman}>
      <span className={styles.player}>{parts.slice(0, incorrectGuesses)}</span>
      <div className={styles.rope} />
      <div className={styles.roof} />
      <div className={styles.stand} />
      <div className={styles.base} />
    </div>
  );
}

export default HangmanBody;
