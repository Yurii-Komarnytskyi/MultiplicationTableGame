import React, { Children, useEffect, useState } from 'react'
import LightBall from './LightBall';

const ScorePanel = ({score, cl}) => {
  return (
    <div className={cl.score_style}>
      <h1>SEE THE SCORE BELOW :</h1> <br />
      <div className={cl.score_lightballs}>
        {score.map(item =>
          <LightBall props={item}></LightBall>
        )}
      </div>
    </div>
  )
}

export default ScorePanel;