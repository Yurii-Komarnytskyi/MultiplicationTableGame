import React, { useEffect, useMemo, useState } from 'react';
import Buttons from './buttons/Buttons';
import cl from './GameContainer.module.css';
import { createRandom, extractCorrectAnsw, compareGathered } from './../../myFunctions';
import ScorePanel from '../scorepanel/ScorePanel';
import Screen from './screen/Screen';
const GameContainer = () => {
  const [score, setScore] = useState([
    { name: '', key: Date.now() }
  ]);
  const [gameMode, setGameMode] = useState(`default`);
  const [playersAnsw, setPlayersAnsw] = useState('');
  const [correctAnsw, setCorrectAnsw] = useState(null);
  const [randQuest, setRandQuest] = useState(createRandom(gameMode));

  useEffect(() => console.log(playersAnsw), [playersAnsw]);

  useMemo(() => {
    setCorrectAnsw(extractCorrectAnsw(randQuest));
    setScore([...score, { name: compareGathered(playersAnsw, correctAnsw), key: Date.now() }]);
    setPlayersAnsw('')
  }, [randQuest]);

  return (
    <div className={cl.almighty_wrapper}>
      <div className={cl.tetris}>
        {/* <GenerateQuestion
          randQuest={randQuest}
        /> */}
        <Screen 
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
      <div className={cl.score_wrapper}>
        <ScorePanel cl={cl}
          score={score}
          gameMode={gameMode}
          setGameMode={setGameMode}
        />
      </div>
    </div>
  )
}
export default GameContainer;
