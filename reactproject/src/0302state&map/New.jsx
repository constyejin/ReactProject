import React from 'react';
import { useState } from "react";
import './New.css'

function New() {
  let [title, setTitle] = useState([
    "DW아카데미 501호",
    "DW아카데미 503호",
    "DW아카데미 201호",
  ]);
  let [name, setName] = useState(['이름1', '이름2', '이름3']) 
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(null);

  const openModal = (i) => {
    setModal(true);
    setModalTitle(i);
  }

  const closeModal = () => {
    setModal(false);
    setModalTitle(null);
  }

  return (
    <div>
      <div className="nav">
        <h1>BLOG</h1>
      </div>

      {
        title.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={() => openModal(i)}>{a}</h4>
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
        modal && (
          <Modal
            title={title}
            modalTitle={modalTitle}
            closeModal={closeModal}
          />
        )
      }

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
