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
  let [title, setTitle] = useState(['파이썬', '리액트', '자바스크립트']);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false);

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
        <div className='list-box'>
          <h4>{title[0]}
            <span onClick={() => {setLike(like + 1)}}>👍🏻</span> {like}
          </h4>
          <p>23.11.22</p>
        </div>
        <button className='title-btn' onClick={() => {
          // array, object => reference data type
          // state가 array / object면 shallow copy를 만들어서 수정해야 한다.
          let newTitle = [...title];
          newTitle[0] = '자바';
          setTitle(newTitle);
          }}>글제목 변경</button>
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
      <button className='sort-btn' onClick={() => {
        let titleSort = [...title];
        titleSort.sort();
        // console.log(titleSort)
        setTitle(titleSort);
      }}>가나다순 정렬</button>
      <button onClick={() => {
        // Javascript에선 버튼 누르면 모달창 html 직접 건드린다.
        // React에선 버튼 누르면 모달창 스위치(State)만 건드린다.
        setModal(!modal);
      }}>모달창</button>

      {
        // 조건문을 중괄호 안에 사용하고 싶을 때 => 삼항 연산자(ternary operator)
        modal == true ? <Modal/> : null
      }
    </div>
  );
}

  // 컴포넌트 생성법
  // 1. function 만들기
  // 2. return() 안에 html 담기
  // 3. <함수명></함수명> 
  // return() 안에 html 병렬 기입하려면 <></> 또는 <div>로 한 번 더 묶기

  // 컴포넌트로 만들면 좋은 것
  // 1. 반복적인 html 축약할 때
  // 2. 큰 페이지
  // 3. 자주 변경되는 html UI (성능상)

  // 컴포넌트 단점
  // 1. state 가져다 쓸 때 다른 함수에 있는 변수 가져다 쓸 수 없다.

  // const Modal = () => {return()} 
  function Modal(){
    return(
      <div className="modal">
        <h4>Title</h4>
        <p>Date</p>
        <p>Content</p>
      </div>
    )
  }

export default App;
