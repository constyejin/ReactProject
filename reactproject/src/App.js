/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from 'react';
import State from './0302state&map/State'
import Box from './component/Box';
import CommentList from './component/CommentList';

function App() {
  return (
    <div className="App">
      <CommentList/>
    </div>
  );
}

export default App;
