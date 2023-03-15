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
              <h4 onClick={() => modal && modalTitle === i ? setModal(false) : (setModal(true), setModalTitle(i))}>{a}</h4>


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

      {/* modal 변수가 true일 때에만 Modal 컴포넌트를 렌더링 한다 */}
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
