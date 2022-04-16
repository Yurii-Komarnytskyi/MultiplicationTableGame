import React, { useEffect, useMemo, useState } from 'react';
import Buttons from './buttons/Buttons';
import cl from './GameContainer.module.css'; 
// line 3 what is cl? - better to use styles instead and also better naming convention should be:
// import styles from './styles.module.css'; 
import { createRandom, extractCorrectAnsw, compareGathered } from './../../myFunctions'; // helpers || utils instead myFunctions
import ScorePanel from '../scorepanel/ScorePanel';
import Screen from './screen/Screen';
const GameContainer = () => {
  const [score, setScore] = useState([
    { name: '', key: Date.now() } // here we have one element in array which will give you 1 "red ball"
  ]);
  const [gameMode, setGameMode] = useState(`default`);
  const [playersAnsw, setPlayersAnsw] = useState('');
  const [correctAnsw, setCorrectAnsw] = useState(null);
  const [randQuest, setRandQuest] = useState(createRandom(gameMode));
  // line 16: you will trigger this function on each render
  // it seems that you can wrap createRandom in useMemo hook 

  useEffect(() => console.log(playersAnsw), [playersAnsw]);

  useMemo(() => { // use memo should RETURN! a value. It seems that you need useEffect here 
    setCorrectAnsw(extractCorrectAnsw(randQuest));
    setScore([...score, { name: compareGathered(playersAnsw, correctAnsw), key: Date.now() }]); 
    // in line 24 you are setting second element in array which will give you two "red balls"
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
