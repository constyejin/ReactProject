import React from 'react'

const Box = (props) => {
  console.log(props)
  return (
    <div className="box">
      <p>Member{props.num}</p>
    </div>
  )
}

export default Box
 