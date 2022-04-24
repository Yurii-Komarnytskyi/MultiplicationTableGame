import React from 'react';
import styles from './GameDisplay.module.css';

const GenerateQuestion = ({ randQuest }) => {
  return (
    <div className={styles.generatedQuestion}>
      {randQuest}
    </div>
  )
}

export default GenerateQuestion;