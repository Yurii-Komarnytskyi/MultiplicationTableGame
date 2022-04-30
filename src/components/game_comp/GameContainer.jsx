import React, { useEffect, useMemo, useState } from 'react';
import Buttons from './buttons/Buttons';
import styles from './GameContainer.module.css';
import { createRandom, extractCorrectAnsw, compareGathered } from '../../helpers';
import ScorePanel from '../scorepanel/ScorePanel';
import GameDisplay from './screen/GameDisplay';

const GameContainer = () => {
  const [score, setScore] = useState([]);
  const [gameMode, setGameMode] = useState(`default`);
  const [playersAnsw, setPlayersAnsw] = useState('');
  const [correctAnsw, setCorrectAnsw] = useState(null);
  const [randQuest, setRandQuest] = useState(createRandom(gameMode));
 
  useEffect(() => {
    setCorrectAnsw(extractCorrectAnsw(randQuest));
    setScore([...score, { name: compareGathered(playersAnsw, correctAnsw), key: Date.now() }]);
    setPlayersAnsw('');
  }, [randQuest]);

  return (
    <div className={styles.almighty_wrapper}>
      <div className={styles.tetris}>
        <GameDisplay 
        randQuest={randQuest}
        playersAnsw={playersAnsw}
        />
        <Buttons
          playersAnsw={playersAnsw}
          setPlayersAnsw={setPlayersAnsw}
          correctAnsw={correctAnsw}
          setCorrectAnsw={setCorrectAnsw}
          gameMode={gameMode}
          setRandQuest={setRandQuest}
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
  )
}
export default GameContainer;
