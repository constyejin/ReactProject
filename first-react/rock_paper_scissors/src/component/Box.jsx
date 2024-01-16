import React from 'react'

const Box = (props) => {
  return (
    <div className="main-box-item">
      <h2>{props.title}</h2>
      {/* props.item && props.item.img */}
      <img src={props.item?.img} alt="" />
      <h4 className={props.result}>{props.result}</h4>
    </div>
  )
}

export default Box
