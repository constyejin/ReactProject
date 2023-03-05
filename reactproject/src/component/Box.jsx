import React from 'react';
import './Box.css';

function Box(props) {
  const clickMe = ()=>{
    alert("리액트 너무 재밌다!");
  }
  return (
    <div className='box'>
      <h1>box{props.num}</h1>
      <h2>{props.name}</h2>
      <button onClick={clickMe}>click</button>
    </div>
  )
}

export default Box;
