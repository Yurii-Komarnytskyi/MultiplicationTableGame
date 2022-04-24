import GameModes from '../game_modes/GameModes';
import LightDisc from './LightDisc';
import styles from './ScorePanel.module.css';

const ScorePanel = ({score, gameMode, setGameMode}) => {
  return (
    <div className={styles.score_style}>
      <GameModes 
        setGameMode={setGameMode}
        gameMode={gameMode}
      />
      <h1>SEE THE SCORE BELOW :</h1> <br />
      <div className={styles.score_lightballs}>
        {score.map((item, index) =>
          index !==0 && <LightDisc props={item} ></LightDisc> // starts bugging while having key prop in LightBall
        )}
      </div>
    </div>
  )
}

export default ScorePanel;