import React from 'react'
import { Link } from 'react-router-dom'
import cl from './Menu.module.css';
const Menu = () => {
    return (
            <div className={cl.menu_wrapper}>
                <Link to='/ne'>Ne</Link>
                <Link to='/game'>Game</Link>
            </div>

        
    )
}
export default Menu