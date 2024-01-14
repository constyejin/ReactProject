import React from 'react'

const Box = (props) => {
  console.log(props)
  return (
    <div className="box">
      <p>Box{props.num}</p>
      <p>{props.name}</p>
    </div>
  )
}

export default Box
 