// warning 알려주는 Lint 기능 끄기
/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '배고픈데';
  // title : state에 보관했던 자료
  // setTitle : state 변경 도와주는 함수
  // 변동시 자동으로 html에 반영되게 만들고 싶다면 state사용
  let [title, setTitle] = useState(['리액트', '파이썬', '자바스크립트']);
  let [like, setLike] = useState(0);

  // JSX 문법
  // 1. class 넣을 때 => className
  // 2. 데이터 바인딩 => {변수명}
  // 3. style => style={{이름 : '값'}}

  function likeBtn(){
    console.log(1);
  }
  return (
    <div className="App">
      <div className='nav'>
        <h4 style={{fontSize : '24px'}}>ReactBlog</h4>
      </div>
      
      <div className="list">
        <h4>{title[0]} 
          <span onClick={() => {setLike(like + 1)}}>👍🏻</span> {like}
        </h4>
        <p>23.11.22</p>
      </div>

      <div className="list">
        <h4>{title[1]}
          <span>👍🏻</span> 
        </h4>
        <p>23.11.22</p>
      </div>

      <div className="list">
        <h4>{title[2]}
          <span>👍🏻</span> 
        </h4>
        <p>23.11.22</p>
      </div>
    </div>
  );
}

export default App;
