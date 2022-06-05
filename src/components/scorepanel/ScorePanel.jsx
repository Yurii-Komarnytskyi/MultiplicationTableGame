import styles from './ScorePanel.module.css';

const ScorePanel = ({score}) => {
  return (
    <div className={styles.score_style}>
      <h1>SEE THE SCORE BELOW :</h1> <br />
      <span>Correct {score.correct}</span>      
      <span>Incorrect {score.incorrect}</span>      
    </div>
  )
}

export default ScorePanel;