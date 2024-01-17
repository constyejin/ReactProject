import React from 'react'

const Score = (props) => {
  const resetScore = () => {
    props.setScore({userScore :0, comScore : 0})
  }
  
  return (
    <div className='score-box'>
      <div className="score">
        <p>{props.score.userScore}</p>
        <p> : </p>
        <p>{props.score.comScore}</p>
      </div>
      <button onClick={resetScore} className='reset-btn'>Reset</button>
    </div>
  )
}

export default Score
