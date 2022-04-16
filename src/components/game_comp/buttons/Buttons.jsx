import React, { useEffect, useState } from 'react';
import cl from './Buttons.module.css'
import {createRandom} from './../../../myFunctions';
const Buttons = ({setPlayersAnsw, gameMode, setRandQuest }) => {
    const obtInt = (e) => setPlayersAnsw((playAnsw)=> playAnsw + e.target.innerText);
    const deleteChar = () => setPlayersAnsw((playAnsw)=> playAnsw.substring(0, playAnsw.length-1));
    const handleButtonNext = () => setRandQuest(createRandom(gameMode));
    return (
        <div>
            <div className={cl.buttonsBasic} >
                <div onClick={e => obtInt(e)} className={cl.btn}>1</div> {/*use loop for creating numbers here */}
                <div onClick={e => obtInt(e)} className={cl.btn}>2</div >
                <div onClick={e => obtInt(e)} className={cl.btn}>3</div>
                <div onClick={e => obtInt(e)} className={cl.btn}>4</div>
                <div onClick={e => obtInt(e)} className={cl.btn}>5</div>
                <div onClick={e => obtInt(e)} className={cl.btn}>6</div>
                <div onClick={e => obtInt(e)} className={cl.btn}>7</div>
                <div onClick={e => obtInt(e)} className={cl.btn}>8</div>
                <div onClick={e => obtInt(e)} className={cl.btn}>9</div>
                <div onClick={e => obtInt(e)} className={cl.btn}>0</div>
                <div onClick={deleteChar} className={[cl.commandButton, cl.delete].join(' ')} >Del</div>
                <div onClick={handleButtonNext} 
                className={[cl.commandButton, cl.next].join(' ')} >⇨</div>
            </div >
        </div>
    )
}
export default Buttons;
