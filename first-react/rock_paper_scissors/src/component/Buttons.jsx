import React from 'react'

const Buttons = (props) => {
  return (
    <div className="btn-list">
      <button onClick={() => {props.play("rock")}}>
        <img src={props.choice["rock"].img} alt="" />
      </button>
      <button onClick={() => {props.play("paper")}}>
        <img src={props.choice["paper"].img} alt="" />
      </button>
      <button onClick={() => {props.play("scissors")}}>
        <img src={props.choice["scissors"].img} alt="" />
      </button>
    </div>
  )
}

export default Buttons
