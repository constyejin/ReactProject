import React from 'react';
import { useState } from "react";
import './New.css'


function New() {
  let [title, setTitle] = useState([
    "DW아카데미 501호",
    "DW아카데미 503호",
    "DW아카데미 201호",
  ]);
  let name = ['이름1', '이름2', '이름3']
  // 모달창을 띄우기 위한 상태값
  let [modal, setModal] = useState(false);
  // 모달창에 표시될 제목 글의 인덱스
  let [modalTitle, setModalTitle] = useState(0);


  return (
    <div>
      <div className="nav">
        <h1>BLOG</h1>
      </div>

      {
        // titlt이라는 변수를 map함수로 순회하며 글 제목을 보여준다.
        title.map(function(a, i){
          return (
            <div className="list" key={i}>
              {/* <h4 onClick={()=>{
                // 조건문
                if (modal && modalTitle === i) {
                  setModal(false);
                } else {
                  setModal(true);
                  setModalTitle(i);
                }
              }}>{a}</h4> */}

              {/* 현재 모달창이 열려있고, 클릭한 글 제목과 모달창에 표시되는 글 인덱스가 같다면 
                  setModal(false)를 호출해서 모달을 닫는다. 그게 아니라면
                  setModal(true)와 setModalTitle(i)를 호출해서 모달을 열고, 
                  모달창에 표시될 글 제목의 인덱스를 업데이트 해준다.
              */}

               {/* 표현식(Expression) 함수 호출(Function call)을 사용해야 한다 
                중괄호는 자바스크립트에서 객체, 배열 등을 생성하거나 함수나 조건문 등의 코드 블록을 정의할 때 사용됨 */}
               {/* { } 중괄호는 함수의 body를 나타내기 위해 사용되는 중괄호 /  */}

               {/* 삼항 연산자를 사용하여 값을 반환하는 구문은 반드시 return 키워드를 사용하여 반환해야 한다. 그렇지 않으면 구문이 실행되고 반환된 값은 무시된다 */}

               {/* 함수 내부에서 표현식(expression)만 작성하면, 해당 표현식의 결과값이 자동으로 반환(return)된다 */}

               {/* 함수 내부에서 삼항 연산자 등의 표현식을 사용하여 값을 반환하려면 re/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import Header from './aTag3/components/Header/Header'
import Main from './aTag3/components/Main/Main'
import Card from './aTag3/components/Main/Cards'
import Footer from './aTag3/components/Footer/Footer'
import New from './0302state&map/New';
import CommentList from './component/CommentList';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Main/>
      <Card/>
      <Footer/> */}
      {/* <CommentList/> */}
      <New/>
    </div>
  );
}
}

               {/* 중괄호({})를 생략하면 함수의 body가 표현식(expression)으로 인식되므로 return 키워드 없이도 값을 반환할 수 있습니다 */}
              {/* <h4 onClick={() => {
                 return modal && modalTitle === i ? setModal(false) : (setModal(true), setModalTitle(i))
              }}>{a}</h4> */}


              <p>안녕하세요. 저는 {name[i]} 입니다.</p>
              <button onClick={()=>{
                let copy = [...title];
                copy.splice(i, 1)
                setTitle(copy)
              }}>글 삭제</button>
            </div>
          )
        })
      }

      {/*modal 변수가 true일 때에만 Modal 컴포넌트를 렌더링 한다 */}

      {/* 우항에 값이 있는 경우, 그 값은 불리언(true/false)으로 평가된다. modal 값이 true일 경우에는 우항의 <Modal> 컴포넌트가 실행된다. */}
      {modal && <Modal modalTitle={modalTitle} title={title} closeModal={() => setModal(false)} />}

    </div>
  )
}

function Modal(props) {
  return(
    <div className="modal">
      <h4>{props.title[props.modalTitle]}</h4>
      <p>Lorem ipsum dolor sit.</p>
      <button onClick={props.closeModal}>닫기</button>
    </div>
  )
}

export default New;
