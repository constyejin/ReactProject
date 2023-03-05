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
  
  return (
    <div className="App">
      <Box name="코알라" num="1"/>
      <Box name="침팬치" num="2"/>
      <Box name="수달" num="3"/>

      <div>{count}</div>
      <button onClick={increase}>+1</button>
    </div>
  );
}

export default App;
