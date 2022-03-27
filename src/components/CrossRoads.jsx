import React from 'react'
import { Route, Routes } from 'react-router-dom';
import GameContainer from './game_comp/GameContainer';
const CrossRoads = () => {
    return (
        <div className='middle_cont'>
            <Routes>
                <Route path='/game' element={<GameContainer />} />
                <Route path='/ne' element={<div>Non existing shit</div>} />
            </Routes>
        </div>

    )
}

export default CrossRoads