import React, { useEffect, useState } from 'react'
import cl from './ScorePanel.module.css'
const ScorePanel = ({score}) => {
  // console.log('Array.isArray(score): ', Array.isArray(score))
  // console.log(...score)
  return (
    <div className={cl.content}>
      <h1>HERE WILL BE SCORE :</h1> <br />
      <div>
        {score.map(item =>
          <h1>{item}</h1>
        )}
      </div>
    </div>
  )
}

export default ScorePanel;