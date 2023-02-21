/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let list = 'DW아카데미 503호';
  // 바닐라JS 코드 (변수에 있는 데이터 html에 넣기)
  // JSX 중괄호 문법을 사용하면 더 쉽고 간단한게 할 수 있다 (id, className, src, href등 사용 가능!)
  // document.querySelector('h4').innerHTML = list;

  // 리액트에서 변수처럼 자료를 보관할 수 있는 satate 문법
  // 한 곳에다가 여러가지 자료를 저장하고 싶을 때는 대괄호를 열어서 Array자료 형식으로 사용하면 편리하다
  let [title, setTitle] = useState(['DW아카데미 501호', 'DW아카데미 503호', 'DW아카데미 201호']);
  // let [title2, setTitle2] = useState('DW아카데미 503호');
  // let [title3, setTitle3] = useState('DW아카데미 201호');

  return (
    <div className="App">
      <div className="black-nav">
        <h3 style={{color : 'red'}}>BLOG</h3>
      </div>
      <div className="list">
        <h4>{title[0]}</h4>
        <p>안녕하세요. 저는 이예진 입니다.</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>안녕하세요. 저는 이예진 입니다.</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>안녕하세요. 저는 이예진 입니다.</p>
      </div>
    </div>
  );
}

export default App;
