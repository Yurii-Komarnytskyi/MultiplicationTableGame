import React, { useEffect, useState } from 'react';
import cl from './Buttons.module.css'
import EnteredValue from './../EnteredValue';
import {createRandom} from './../../../myFunctions';
const Buttons = ({ playersAnsw, setPlayersAnsw, setRandQuest }) => {
    const obtInt = (e) => setPlayersAnsw((playAnsw)=> playAnsw + e.target.innerText);
    const deleteChar = () => setPlayersAnsw((playAnsw)=> playAnsw.substring(0, playAnsw.length-1));
    const handleButtonNext = () => setRandQuest(createRandom());
    return (
        <div>
            <EnteredValue playersAnsw={playersAnsw} />
            <div className={cl.buttonsBasic} >
                <div onClick={e => obtInt(e)} className={cl.btn}>1</div>
                <div onClick={e => obtInt(e)} className={cl.btn}>2</div >
                <div onClick={e => obtInt(e)} className={cl.btn}>3</div>
                <div onClick={e => obtInt(e)} className={cl.btn}>4</div>
                <div onClick={e => obtInt(e)} className={cl.btn}>5</div>
                <div onClick={e => obtInt(e)} className={cl.btn}>6</div>
                <div onClick={e => obtInt(e)} className={cl.btn}>7</div>
                <div onClick={e => obtInt(e)} className={cl.btn}>8</div>
                <div onClick={e => obtInt(e)} className={cl.btn}>9</div>
                <div onClick={e => obtInt(e)} className={cl.btn}>0</div>
                <div onClick={deleteChar} className={cl.commandButton} >del</div>
                <div onClick={handleButtonNext} 
                className={cl.commandButton} >next</div>
            </div >
        </div>
    )
}

export default Buttons;

// <div className={cl.btn two}>2</div>
// <div className={cl.btn three}>3</div>
// <div className={cl.btn four}>4</div>
// <div className={cl.btn five}>5</div>
// <div className={cl.btn six}>6</div>
// <div className={cl.btn seven}>7</div>
// <div className={cl.btn eight}>8</div>
// <div className={cl.btn nine}>9</div>
// <div className={cl.btn zero}>0</div>
// <div className={cl.commandButton} >del</div>
// <div className={cl.commandButton} >⇨</div>
