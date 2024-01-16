import React from 'react'

const Box = (props) => {
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img src={props.item?.img} alt="scissors" />
      <h3>WIN</h3>
    </div>
  )
}

export default Box
