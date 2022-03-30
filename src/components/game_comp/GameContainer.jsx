import React, { useEffect, useMemo, useState } from 'react';
import Buttons from './buttons/Buttons';
import cl from './GameContainer.module.css';
import GenerateQuestion from './GenerateQuestion';
import { createRandom, extractCorrectAnsw, compareGathered } from './../../myFunctions';
import ScorePanel from '../scorepanel/ScorePanel';

const GameContainer = () => {
  const [score, setScore] = useState([
    { name: '', key: Date.now() }
  ]);
  const [playersAnsw, setPlayersAnsw] = useState('');
  const [correctAnsw, setCorrectAnsw] = useState(null);
  const [randQuest, setRandQuest] = useState(createRandom());

  useEffect(() => console.log(playersAnsw), [playersAnsw]);

  useMemo(() => {
    setCorrectAnsw(extractCorrectAnsw(randQuest));
    // compareGathered(playersAnsw, correctAnsw);
    setScore([...score, { name: compareGathered(playersAnsw, correctAnsw), key: Date.now() }]);
    setPlayersAnsw('')
  }, [randQuest]);



  return (
    <div className={cl.almighty_wrapper}>
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
      <div className={cl.score_wrapper}>
        <ScorePanel cl={cl} score={score} />
      </div>
    </div>

  )
}

export default GameContainer;
