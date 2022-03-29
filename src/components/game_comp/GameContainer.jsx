import React, { useEffect, useMemo, useState } from 'react';
import Buttons from './buttons/Buttons';
import cl from './GameContainer.module.css';
import GenerateQuestion from './GenerateQuestion';
import { createRandom, extractCorrectAnsw, compareGathered } from './../../myFunctions';
import ScorePanel from '../scorepanel/ScorePanel';

const GameContainer = () => {
  const [score, setScore] = useState([]);
  const [playersAnsw, setPlayersAnsw] = useState('');
  const [correctAnsw, setCorrectAnsw] = useState(null);
  const [randQuest, setRandQuest] = useState(createRandom());

  useEffect(()=> console.log(playersAnsw),[playersAnsw]);
  
  useMemo(() => {
    setCorrectAnsw(extractCorrectAnsw(randQuest));
    // compareGathered(playersAnsw, correctAnsw);
    setScore([...score, compareGathered(playersAnsw, correctAnsw)]);
    setPlayersAnsw('')
  }, [randQuest]);



  return (
    <div className={cl.tetris}>
      <GenerateQuestion
        randQuest={randQuest}
      />
      <Buttons
        playersAnsw={playersAnsw}
        setPlayersAnsw={setPlayersAnsw}
        correctAnsw={correctAnsw}
        setCorrectAnsw={setCorrectAnsw}
        setRandQuest={setRandQuest}
      />
      <ScorePanel score={score} />
    </div>
  )
}

export default GameContainer;
