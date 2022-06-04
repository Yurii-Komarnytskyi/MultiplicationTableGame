import React, { useEffect, useState } from 'react';
import styles from './GameContainer.module.css';
import { createRandom, extractCorrectAnsw, compareGathered } from '../../utils';
import ScorePanel from '../scorepanel/panel/ScorePanel';
import GameModesCheckBoxes from '../game_settings/GameModesCheckBoxes';
import BaseForMathActions from '../play_ground/BaseForMathActions';

const GameContainer = () => {
  const [score, setScore] = useState([]);
  const [gameMode, setGameMode] = useState([]);
  const [areAllTablesChecked, setAreAllTablesChecked] = useState(true);
  const [playersAnsw, setPlayersAnsw] = useState('');
  const [correctAnsw, setCorrectAnsw] = useState(null);
  const [randQuest, setRandQuest] = useState(createRandom(gameMode, areAllTablesChecked));

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
            areAllTablesChecked={areAllTablesChecked} 
            setIAreAllTablesChecked={setAreAllTablesChecked}
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
        areAllTablesChecked={areAllTablesChecked} 
        setAreAllTablesChecked={setAreAllTablesChecked}
      />
    </React.Fragment>
  )
}
export default GameContainer;
