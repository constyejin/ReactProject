import React from 'react'

const Score = (props) => {
  return (
    <div className='score-box'>
      <div className="score">
        <p>{props.user}</p>
        <p> : </p>
        <p>{props.computer}</p>
      </div>
      <button className='reset-btn'>Reset</button>
    </div>
  )
}

export default Score
