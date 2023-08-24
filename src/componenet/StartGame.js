import React, { useState } from 'react'
import dice from '../images/dice.png'
import './StartGame.css'
import Game from './Game'
import App from '../App'


const StartGame = (props) => {

  return (
    <>
    

    
     <div className='container'>
      <img src={dice} alt="" />


      <div>
        <h1>
          Dice Game
        </h1>
        <button onClick={props.toggle}>Play Now</button> 
       
      </div>  </div>
      
      
      {/* ////////////////////////////////////////////////////////////////////// */}

      
      
      </>

  )
}

export default StartGame
