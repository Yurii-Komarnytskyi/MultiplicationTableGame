import React, { Children, useEffect, useState } from 'react'
import GameModes from '../game_modes/GameModes';
import LightBall from './LightBall';

const ScorePanel = ({score, cl, gameMode, setGameMode}) => {
  return (
    <div className={cl.score_style}> {/* create seperate css module for this component */}
      <GameModes 
        setGameMode={setGameMode}
        gameMode={gameMode}
      />
      <h1>SEE THE SCORE BELOW :</h1> <br />

      <div className={cl.score_lightballs}> {/* create seperate css module for this component */}

        {score.map(item =>
          <LightBall props={item}></LightBall> // <LightBall {...item}/> also dont forget about key
         )}
        
      </div>
    </div>
  )
}

export default ScorePanel;