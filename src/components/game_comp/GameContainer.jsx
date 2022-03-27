import React, { useEffect, useMemo, useState } from 'react';
import Buttons from './buttons/Buttons';
import cl from './GameContainer.module.css';
import GenerateQuestion from './GenerateQuestion';
import { createRandom, extractCorrectAnsw, compareGathered } from './../../myFunctions';

const GameContainer = () => {
  const [playersAnsw, setPlayersAnsw] = useState('')
  const [correctAnsw, setCorrectAnsw] = useState(null);
  const [randQuest, setRandQuest] = useState(createRandom());
  useEffect(()=> {
    console.log(playersAnsw)
  },[playersAnsw]);
  useMemo(() => {
    setCorrectAnsw(extractCorrectAnsw(randQuest));
    compareGathered(playersAnsw, correctAnsw);
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


// const [playersAnsw, setPlayersAnsw] = useState('')
// const [correctAnsw, setCorrectAnsw] = useState(null);
// const [randQuest, setRandQuest] = useState(createRandom());
// const [isNextPressed, setIsNextPressed] = useState(false);

// useEffect(()=> {
//   console.log('useEffect Start')
//   setCorrectAnsw(extractCorrectAnsw(randQuest));
//   console.log('correctAnsw inside useEffect', correctAnsw);
//   // setPlayersAnsw(``);

// },[isNextPressed]);
// useMemo(() => {
//   console.log('useMemo  Start')
//   setIsNextPressed(false); // should be the reason why renders twice 
//   compareGathered(playersAnsw, correctAnsw);
//   return setRandQuest(createRandom());  
// }, [isNextPressed]);