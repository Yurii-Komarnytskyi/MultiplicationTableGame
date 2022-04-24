import React from 'react';
import styles from './GameDisplay.module.css';

const EnteredValue = ({playersAnsw}) => {
  return (
    <div className={[styles.screenWrapper, styles.enteredVal].join(' ')}>
      {playersAnsw || `0.0`}
    </div>
  )
}

export default EnteredValue;