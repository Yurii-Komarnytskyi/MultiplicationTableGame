import React from 'react';
import styles from './LightDisc.module.css';
const LightDisc = (props) => {
  const rootClasses = [styles.ball];
  (props.props.name === 't')? rootClasses.push(styles.correct) : rootClasses.push(styles.incorrect);
  return (
    <div className={rootClasses.join(' ')}>
      {props.props.name}
    </div>
  )
}

export default LightDisc;
