import React from 'react';
import cl from './Screen.module.css';

const EnteredValue = ({playersAnsw}) => {
  return (
    <div className={cl.enteredVal}>
      {playersAnsw? playersAnsw: `0.0`}
    </div>
  )
}

export default EnteredValue;