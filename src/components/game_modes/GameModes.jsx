import styles from './GameModes.module.css';
const GameModes = ({setGameMode }) => {
    return (
        <div>
            <span>Select exact digit you'd like to get practice with: </span>
            <select
                className={styles.modes_selector}
                onChange={e => setGameMode(e.target.value)}
            >
                <option value={'default'}>default (2 to 9)</option>
                {[2,3,4,5,6,7,8,9].map(val =>
                    <option value={val} >{val}</option> 
                )}
            </select>
        </div>
    )
}

export default GameModes