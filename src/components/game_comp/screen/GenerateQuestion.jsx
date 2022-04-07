import React from 'react';
import cl from './Screen.module.css';

const GenerateQuestion = ({randQuest}) => {
  return (
    <div className={cl.generatedQuestion}>
      {randQuest}
    </div>
  )
}

export default GenerateQuestion;