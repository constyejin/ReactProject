/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from 'react';
import State from './0302state&map/State'
import Box from './component/Box';
import Comment from './component/Comment'
import CommentList from './component/CommentList';
import back from './react.png';
import SubmitButton from './component/SubmitButton'
import Modal from './component/Modal'
import New from './0302state&map/New'
import data from './shoppingMall/date';

function App() {
  let [shose] = useState(data);

  return (
    <div className="App">
      {/* <CommentList/> */}
      {/* <SubmitButton/> */}
      {/* <New/> */}
    </div>
  );
}

export default App;
