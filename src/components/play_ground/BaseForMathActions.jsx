import React, { useEffect, useRef, useState } from 'react';
import styles from './BaseForMathActions.module.css';
import { createRandom } from '../../utils';
const BaseForMathActions = ({
  randQuest,
  setRandQuest,
  playersAnsw,
  setPlayersAnsw,
  gameMode,
  areAllTablesChecked,}) => {

  const allowedInputKeys = ['Backspace','Delete','ArrowRight','ArrowLeft','Tab', ...Array.from(Array(10)).map((val, ind) => val = `Digit${ind}`)];
  const input_Ref = useRef(null);
  const handleCheckButton = (input_Ref) => (!input_Ref.current.value) ? null : setRandQuest(createRandom(gameMode, areAllTablesChecked));
  const handleKeyUpEvent = (e) => {
    if(e.code === 'Enter') return handleCheckButton(input_Ref);
    if(!allowedInputKeys.includes(e.code)) return input_Ref.current.value = ''
  }

  return (
    <div className={styles.wrapperForMathBase}>
      <span className={styles.generatedQuestion}> {randQuest} </span>
      <input
        className={styles.enteredVal}
        ref={input_Ref}
        onInput={e => setPlayersAnsw(e.target.value)}
        onKeyUp={e => handleKeyUpEvent(e)}
        value={playersAnsw}
        placeholder='       '
      />
      <button
        onClick={() => handleCheckButton(input_Ref)}
      > CHECK </button>
    </div>
  )
}
export default BaseForMathActions;