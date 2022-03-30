import React from 'react';
import cl from './ScorePanel.module.css';
const LightBall = (props) => {
  const rootClasses = [cl.ball];
  (props.props.name === 't')? rootClasses.push(cl.correct) : rootClasses.push(cl.incorrect);
  console.log(rootClasses.join(' '))
  return (
    <div className={rootClasses.join(' ')}>
      {props.props.name}
    </div>
  )
}

export default LightBall;
