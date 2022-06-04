import LightDisc from '../lightElem/LightDisc';
import styles from './ScorePanel.module.css';

const ScorePanel = ({score}) => {
  return (
    <div className={styles.score_style}>
      <h1>SEE THE SCORE BELOW :</h1> <br />
      <div className={styles.score_lightballs}>
        {score.map((item, index) =>
          index !==0 && <LightDisc props={item} key={index}></LightDisc> // starts bugging while having key prop in LightBall
        )}
      </div>
    </div>
  )
}

export default ScorePanel;