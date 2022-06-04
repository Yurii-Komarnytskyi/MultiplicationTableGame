import React, { useEffect, useRef } from 'react';
import styles from './BaseForMathActions.module.css';
import { createRandom } from '../../helpers';
const BaseForMathActions = ({
  randQuest,
  setRandQuest,
  playersAnsw,
  setPlayersAnsw,
  gameMode, }) => {

  const input_Ref = useRef(null);
  const handleCheckButton = (input_Ref) => (!input_Ref.current.value) ? null : setRandQuest(createRandom(gameMode));
  
  return (
    <div className={styles.wrapperForMathBase}>

      <span className={styles.generatedQuestion}> {randQuest} </span>

      <input
        onInput={e => setPlayersAnsw(e.target.value)}
        ref={input_Ref}
        value={playersAnsw}
        className={styles.enteredVal}
      />
      <button
        onClick={() => handleCheckButton(input_Ref)}
      > CHECK </button>
    </div>
  )
}
export default BaseForMathActions;