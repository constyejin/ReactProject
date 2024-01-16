import React from 'react'

const Box = (props) => {
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      {/* props.item && props.item.img */}
      <img src={props.item?.img} alt="" />
      <h3>{props.result}</h3>
    </div>
  )
}

export default Box
