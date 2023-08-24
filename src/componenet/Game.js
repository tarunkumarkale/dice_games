import React, { useState, useEffect } from 'react';
import './Game.css';
import dice_1 from '../images/dice_1.png';

const Game = () => {
  const [ok, setOk] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [showScore, setShowScore] = useState(0);

  const GenerateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const RoleDice = () => {
    const randomNumber = GenerateRandomNumber(1, 7);
    setCurrentDice(randomNumber);
  };

  const Reset = () => {
    setShowScore(0);
    setCurrentDice(1);
    setOk(0);
  };

  let arr = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    if (currentDice === ok) {
      setShowScore(prev => prev + ok);
    } else if(showScore>0){
      setShowScore(prev => prev - 1)
    }
  }, [ok, currentDice]);

  return (
    <>
      <div className='main'>
        <div className='start'>
          <h1>{showScore}</h1>
          <h2>Total Score</h2>
        </div>
        <div className='end'>
          {arr.map((Element, i) => (
            <div onClick={() => setOk(Element)} className='box' key={i}>
              {Element}
            </div>
          ))}
          <h2 className='pos'>Select Number</h2>
        </div>
      </div>

      <div className='dice1' onClick={RoleDice}>
        <img src={require(`../images/dice_${currentDice}.png`)} alt={`dice ${currentDice}`} />
        <h2 className='S'>Click on dice to roll</h2>
        <div className='btn'>
          <button onClick={Reset}>Reset Scores</button>
          {/* <button >Shows Rules</button> */}
        </div>
      </div>
    </>
  );
};

export default Game;
