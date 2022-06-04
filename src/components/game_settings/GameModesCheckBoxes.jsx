import React, { useEffect, useRef } from 'react';
import styles from './GameModesCheckBoxes.module.css';
import { ONE_TO_NINE,extractCorrectAnsw, createRandom } from '../../helpers';

const GameModesCheckBoxes = ({ 
    setGameMode, 
    gameMode,}) => {

    let hasDefModeToggled = false;
    const obtainDefModeCheckBox = useRef(null);

    // const handleOneToNine = () => {
    //     if (gameMode.length === 8){
    //         hasDefModeToggled = !hasDefModeToggled;
    //         setGameMode([]);
    //     } else  setGameMode(ONE_TO_NINE);

    //     console.log(gameMode, hasDefModeToggled)
    // }
    const handleSinglePick = (e) => {
        // if (hasDefModeToggled) {
        //     console.log(obtainDefModeCheckBox.current.checked);
        //     obtainDefModeCheckBox.current.style.backgroundColor = "blue";
        //     return setGameMode([e.target.value]);
        // }
        if (gameMode.includes(Number(e.target.value))) return setGameMode(arr => arr.filter(val => val !== Number(e.target.value)));
        return setGameMode((arr) => [...arr, Number(e.target.value)])
    }
    
    return (
        <div className={styles.modesWrapper}> 
            <span>Select check-boxes with an equivalent numbers you'd like to get practice with: </span>
            <br />
            

            {/* DEFAULT 2 TO 9 */}
            {/* <label className={styles.boxes}>  
                <input
                    onChange={handleOneToNine}
                    type='checkbox'
                    // checked={true}
                    ref={obtainDefModeCheckBox}
                />
                <span>Defauld aka 2 to 9</span>
            </label> */}
            
            {/* SINGLE BOXES  */}
            {ONE_TO_NINE.map((val) => 
                <React.Fragment>
                    <label className={styles.boxes}>
                        <input
                            onChange={e => handleSinglePick(e)}
                            type='checkbox'
                            value={val}
                        />
                        <span>{val}</span>
                    </label>
                </React.Fragment>)}
        </div>
    )
}

export default GameModesCheckBoxes;