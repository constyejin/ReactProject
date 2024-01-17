import React from 'react'

const Buttons = (props) => {
  return (
    <div className="btn-list">
      <button onClick={() => {props.play("rock")}}>Rock</button>
      <button onClick={() => {props.play("paper")}}>Paper</button>
      <button onClick={() => {props.play("scissors")}}>Scissors</button>
    </div>
  )
}

export default Buttons
