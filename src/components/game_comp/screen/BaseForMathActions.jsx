import React from 'react';
import GenerateQuestion from './GenerateQuestion';
import EnteredValue from './EnteredValue';
import styles from './BaseForMathActions.module.css';
const BaseForMathActions = ({ randQuest, playersAnsw }) => {
  return (
    <div className={styles.wrapperForMathBase}>
      
      <span className={styles.generatedQuestion}>{randQuest}</span>
      <input 
        value={playersAnsw}
        className={styles.enteredVal}
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  )
}
export default BaseForMathActions;