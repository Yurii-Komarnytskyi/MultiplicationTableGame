import React from 'react';
import GenerateQuestion from './GenerateQuestion';
import EnteredValue from './EnteredValue';
import styles from './GameDisplay.module.css';
const GameDisplay = ({ randQuest, playersAnsw }) => {
  return (
    <div className={styles.screenWrapper}>
      <GenerateQuestion randQuest={randQuest} />
      <EnteredValue playersAnsw={playersAnsw} />
    </div>
  )
}
export default GameDisplay;