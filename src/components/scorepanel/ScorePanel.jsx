import styles from './ScorePanel.module.css';

const ScorePanel = ({score}) => {
  return (
    <div className={styles.score_style}>
      <h2>Total answered: {score.total}</h2> <br />
      <div className={styles.wrapperForAnswers}>
        <div className={styles.scoreCorrect}>Correct: <span> {score.correct} </span> </div>      
        <div className={styles.scoreIncorrect}>Incorrect: <span> {score.incorrect} </span></div>      
      </div>
      
    </div>
  )
}

export default ScorePanel;