import React from 'react'

const Buttons = (props) => {
  return (
    <div className="btn-list">
      <button onClick={() => {props.play("rock")}}>
        <img src={props.choice["rock"].img} alt={props.choice["rock"].name} />
      </button>
      <button onClick={() => {props.play("paper")}}>
        <img src={props.choice["paper"].img} alt={props.choice["paper"].name} />
      </button>
      <button onClick={() => {props.play("scissors")}}>
        <img src={props.choice["scissors"].img} alt={props.choice["scissors"].name} />
      </button>
    </div>
  )
}

export default Buttons
