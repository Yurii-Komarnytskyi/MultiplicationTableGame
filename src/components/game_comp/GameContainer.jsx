import React, { useEffect, useMemo, useState } from 'react';
import Buttons from './buttons/Buttons';
import cl from './GameContainer.module.css';
import GenerateQuestion from './GenerateQuestion';
import { createRandom, extractCorrectAnsw, compareGathered } from './../../myFunctions';

const GameContainer = ({score}) => {
  const [playersAnsw, setPlayersAnsw] = useState('')
  const [correctAnsw, setCorrectAnsw] = useState(null);
  const [randQuest, setRandQuest] = useState(createRandom());

  useEffect(()=> console.log(playersAnsw),[playersAnsw]);
  
  useMemo(() => {
    setCorrectAnsw(extractCorrectAnsw(randQuest));
    compareGathered(playersAnsw, correctAnsw, score);
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
    </div>
  )
}

export default GameContainer;
