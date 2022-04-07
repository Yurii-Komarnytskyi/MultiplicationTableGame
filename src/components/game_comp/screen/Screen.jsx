import React from 'react';
import GenerateQuestion from './GenerateQuestion';
import EnteredValue from './EnteredValue';
import cl from './Screen.module.css';
const Screen = ({randQuest, playersAnsw}) => {
  return (
    <div className={cl.screenWrapper}>
        <GenerateQuestion randQuest={randQuest}/>
        <EnteredValue playersAnsw={playersAnsw}/>
    </div>
  )
}
export default Screen;