import React, { useEffect } from 'react';
import cl from './GameModes.module.css';

const GameModes = ({ gameMode, setGameMode }) => {
    useEffect(() => {
        console.log('typeof gameMode: ', typeof gameMode);
        console.log('gameMode: ', gameMode)
    }, [gameMode])
    return (
        <div>
            <span>Select exact digit you'd like to get practice with: </span>
            <select
                className={cl.modes_selector}
                onChange={e => setGameMode(e.target.value)}
            >
                <option value={'default'}>default (2 to 9)</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
            </select>
        </div>
    )
}

export default GameModes