import React, { useEffect, useState } from 'react';
import styles from './GameContainer.module.css';
import { createRandom, extractCorrectAnsw, compareGathered, ONE_TO_NINE } from '../../helpers';
import ScorePanel from '../scorepanel/ScorePanel';
// import BaseForMathActions from '../play_ground/math_area/BaseForMathActions';
import GameModesCheckBoxes from '../game_settings/GameModesCheckBoxes';
// import BaseForMathActions from '../play_ground/BaseForMathActions';
import BaseForMathActions from '../play_ground/BaseForMathActions';

const GameContainer = () => {
  const [score, setScore] = useState([]);
  // const [gameMode, setGameMode] = useState(ONE_TO_NINE);
  const [gameMode, setGameMode] = useState([]);
  const [playersAnsw, setPlayersAnsw] = useState('');
  const [correctAnsw, setCorrectAnsw] = useState(null);
  const [randQuest, setRandQuest] = useState(createRandom(gameMode));

  useEffect(() => {
    setCorrectAnsw(extractCorrectAnsw(randQuest));
    setScore([...score, { name: compareGathered(playersAnsw, correctAnsw), key: Date.now() }]);
    setPlayersAnsw('');
  }, [randQuest]);

  return (
    <React.Fragment>
      <div className={styles.almighty_wrapper}>
        <div className={styles.tetris}>
          
          <BaseForMathActions
            randQuest={randQuest}
            setRandQuest={setRandQuest}
            playersAnsw={playersAnsw}
            setPlayersAnsw={setPlayersAnsw}
            gameMode={gameMode}
          />
        </div>
        <div className={styles.score_wrapper}>
          <ScorePanel
            score={score}
            gameMode={gameMode}
            setGameMode={setGameMode}
          />
        </div>
      </div>
      <GameModesCheckBoxes 
        setGameMode={setGameMode}
        gameMode={gameMode}
      />
    </React.Fragment>
  )
}
export default GameContainer;
