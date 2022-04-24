import styles from './Buttons.module.css'
import { createRandom } from '../../../helpers';
const Buttons = ({ setPlayersAnsw, gameMode, setRandQuest }) => {
    const obtInt = (e) => setPlayersAnsw((playAnsw) => playAnsw + e.target.innerText);
    const deleteChar = () => setPlayersAnsw((playAnsw) => playAnsw.substring(0, playAnsw.length - 1));
    const handleButtonNext = () => setRandQuest(createRandom(gameMode));
    return (
        <div className={styles.buttonsBasic} >
            {[1,2,3,4,5,6,7,8,9,0].map(val =>
                <div onClick={e => obtInt(e)} className={styles.btn}>{val}</div >
            )}
            <div onClick={deleteChar} className={[styles.btn, styles.delete].join(' ')} >Del</div>
            <div onClick={handleButtonNext}
                className={[styles.btn, styles.next].join(' ')} >⇨</div>
        </div >
    )
}
export default Buttons;
