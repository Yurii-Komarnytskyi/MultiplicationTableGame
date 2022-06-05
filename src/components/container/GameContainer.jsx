import React, { useEffect, useState } from 'react';
import styles from './GameContainer.module.css';
import { createRandom, extractCorrectAnsw, compareGathered } from '../../utils';
import ScorePanel from '../scorepanel/ScorePanel';
import GameModesCheckBoxes from '../game_settings/GameModesCheckBoxes';
import BaseForMathActions from '../play_ground/BaseForMathActions';

const GameContainer = () => {
  const [score, setScore] = useState({correct: 0, incorrect: -1, total: -1});
  const [gameMode, setGameMode] = useState([]);
  const [areAllTablesChecked, setAreAllTablesChecked] = useState(true);
  const [playersAnsw, setPlayersAnsw] = useState('');
  const [correctAnsw, setCorrectAnsw] = useState(null);
  const [randQuest, setRandQuest] = useState(createRandom(gameMode, areAllTablesChecked));

  useEffect(() => {
    setCorrectAnsw(extractCorrectAnsw(randQuest));
    setScore(prevScore => compareGathered(playersAnsw, correctAnsw, prevScore));
    setPlayersAnsw('');
  }, [randQuest]);

  return (
    <React.Fragment>
      <div className={styles.gamingPart}>
          <BaseForMathActions
            randQuest={randQuest}
            setRandQuest={setRandQuest}
            playersAnsw={playersAnsw}
            setPlayersAnsw={setPlayersAnsw}
            gameMode={gameMode}
            areAllTablesChecked={areAllTablesChecked} 
            setAreAllTablesChecked={setAreAllTablesChecked}
          />
          <ScorePanel
            score={score}
            gameMode={gameMode}
            setGameMode={setGameMode}
          />
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
