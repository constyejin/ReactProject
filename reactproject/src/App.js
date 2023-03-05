/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import State from './0302state&map/State'
import Box from './component/Box';
import { useState } from 'react';

function App() {
  let num = 0;
  const [count, setCount] = useState(0);

  const increase = () => {
    num = num + 1;
    setCount(count + 1)
    console.log("num", num, "state", count)
  }
  
  let name = ['예진1', '예진2', '예진3', '예진4']

  return (
    <div className="App">
      <div className='box'>
        <h1>box1</h1>
        <h2>yejin</h2>
      </div>
      
      {/* {
        name.map(function(a, i){
          return (
            <div className='box' key={i}>
              <h1>box1</h1>
              <h2>{name[i]}</h2>
              <button>button</button>
            </div>
          )
        })
      } */}

      <Box name="코알라" num="1"/>
      <Box name="쿼카" num="2"/>
      <Box name="수달" num="3"/>
      <Box name="해달" num="3"/>

      <div>{count}</div>
      <button onClick={increase}>+1</button>
    </div>
  );
}

export default App;
