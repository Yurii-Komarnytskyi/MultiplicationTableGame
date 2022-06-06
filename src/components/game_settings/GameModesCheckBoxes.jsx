import React, { useEffect, useRef, useState } from 'react';
import styles from './GameModesCheckBoxes.module.css';
import { TWO_TO_NINE } from '../../utils';

const GameModesCheckBoxes = ({
  setGameMode,
  gameMode,
  areAllTablesChecked,
  setAreAllTablesChecked, }) => {

  const allTablesCheckBox = useRef(null);  
  const [boxesFromTwoToNine, setBoxesFromTwoToNine] = useState([...Array.from(Array(8)).map((val, ind) => ([val = ind + 2, false]))]);

  useEffect(() => {
    setGameMode(boxesFromTwoToNine.reduce((acc, val) => {
        if(val[1] === true) {
        acc.push(val[0]);
        return acc;
      } 
      return acc
    },[]))
  }, [boxesFromTwoToNine])

  const handleAllTables = () => {
    if (areAllTablesChecked) {
      setAreAllTablesChecked(bool => !bool); // changes areAllTablesChecked to FALSE
      setGameMode([]);
    }else {
      setAreAllTablesChecked(bool => !bool); // changes areAllTablesChecked to TRUE
      setGameMode(TWO_TO_NINE);
      setBoxesFromTwoToNine(prevArr => prevArr.map((_, ind) => [ind+2, false]));
    }
  }

  const handleSingleBox = (e) => {
    if (areAllTablesChecked) setAreAllTablesChecked(false);
    setBoxesFromTwoToNine(prevArr => prevArr.map((item, ind) => (+item[0] === +e.target.value)? [ind+2, !item[1]] : item));
  }

  const actOnSpanClickOnly = (e) => (e.target.tagName === 'LABEL')? e.preventDefault() : null ;

  return (
    <div className={styles.modesWrapper}>
      <h3>Tables of : </h3>
      <br />

      <label 
        className={styles.labelWrapper}
        onClick={e => actOnSpanClickOnly(e)}
      >
        <input
          className={styles.inputBox}
          onChange={handleAllTables}
          type='checkbox'
          checked={areAllTablesChecked}
          ref={allTablesCheckBox}
        />
        <span>All from 2 to 9</span>
      </label>

      <div className={styles.customModes}>
        {boxesFromTwoToNine.map((boxState) =>
            <label 
             className={styles.labelWrapper}
             onClick={e => actOnSpanClickOnly(e)}
            >
              <input
                className={styles.inputBox}
                onChange={e => handleSingleBox(e)}
                type='checkbox'
                value={boxState[0]}
                checked={boxState[1]}
              />
              <span>{boxState[0]}</span>
            </label>)}
        </div>

    </div>
  )
}

export default GameModesCheckBoxes;
