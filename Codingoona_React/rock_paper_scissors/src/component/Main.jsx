import React from 'react'

const Main = (props) => {
  return (
    <div className="main-box-item">
      <h2>{props.title}</h2>
      {
        props.item ? <img src={props.item?.img} alt={props.item?.name} /> : null
      }
      <h4 className={props.result}>{props.result}</h4>
    </div>
  )
}

export default Main
