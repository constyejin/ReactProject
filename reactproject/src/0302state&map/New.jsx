import React from 'react';
import { useState } from "react";
import './New.css'

function New() {
  let list = "DW아카데미 503호";
  let [title, setTitle] = useState([
    "DW아카데미 501호",
    "DW아카데미 503호",
    "DW아카데미 201호",
  ]);
  let [name, setName] = useState(['이름1', '이름2', '이름3']) 
  let [modal, setMoal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);

  return (
    <div>
      <div className="nav">
        <h1>BLOG</h1>
      </div>

      {
        title.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{setMoal(!modal); setModalTitle(i)}}>{a}</h4>
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


      {
        // 조건문 대신 삼항연산자 사용
        // 조건식 ? 참일때 실행 할 코드 : 거짓일때 실행 할 코드
        // 1 == 1 ? 'ㅇㅇ' : 'ㄴㄴ'
        // null은 텅빈 값
        modal == true ? <Modal modalTitle={modalTitle} title={title}/> : null
      }

    </div>
  )
}

function Modal(props) {
  return(
    <div className="modal">
      <h4>{props.title[props.modalTitle]}</h4>
      <p>Lorem ipsum dolor sit.</p>
      <button>글수정</button>
    </div>
  )
}

export default New
