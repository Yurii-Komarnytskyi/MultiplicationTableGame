import React, { Children, useEffect, useState } from 'react'
import GameModes from '../game_modes/GameModes';
import LightBall from './LightBall';

const ScorePanel = ({score, cl, gameMode, setGameMode}) => {
  return (
    
    <div className={cl.score_style}>
      <GameModes 
        setGameMode={setGameMode}
        gameMode={gameMode}
      />
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