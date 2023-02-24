/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let list = "DW아카데미 503호";
  // 바닐라JS 코드 (변수에 있는 데이터 html에 넣기)
  // JSX 중괄호 문법을 사용하면 더 쉽고 간단한게 할 수 있다 (id, className, src, href등 사용 가능!)
  // document.querySelector('h4').innerHTML = list;

  // 리액트에서 변수처럼 자료를 보관할 수 있는 satate 문법
  // 한 곳에다가 여러가지 자료를 저장하고 싶을 때는 대괄호를 열어서 Array자료 형식으로 사용하면 편리하다
  let [title, setTitle] = useState([
    "DW아카데미 501호",
    "DW아카데미 503호",
    "DW아카데미 201호",
  ]);
  let [name, setName] = useState(['이름1', '이름2', '이름3'])
  // let [title2, setTitle2] = useState('DW아카데미 503호');
  // let [title3, setTitle3] = useState('DW아카데미 201호');
  // 왼쪽 : 실제 state값 / 오른쪽 : 변경될 state값
  let [like, setLike] = useState([0,0,0]);        
  let [modal, setMoal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [input, setInput] = useState('');

  const onCreate = () => {
    const first = ['첫번째 글 제목!']
    setTitle([first, ...title])
  }

  const removeList = ()=> {

  }

  return (
    <div className="App">
      <div className="black-nav">
        <h3 style={{ color: "red" }}>BLOG</h3>
      </div>
      {/* <div className="list">
        <h4> 
          {title[0]}{" "}
          <span onClick={() => {setLike(like + 1);}}>👍</span>{" "} {like} </h4>
        <p>안녕하세요. 저는 이예진 입니다.</p>
        <button
          onClick={() => {
            let titleCopy = [...title];
            titleCopy[0] = "리액트 너무 재밌어요!";
            console.log(title == titleCopy);
            setTitle(titleCopy);

            // let arr = [1, 2, 3];
            // arr[0] = 3;
            // let arrCopy = arr;
            // console.log(arr == arrCopy);
          }}
        >
          Click
        </button>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>안녕하세요. 저는 이예진 입니다.</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setMoal(!modal)}}>{title[2]}</h4>
        <p>안녕하세요. 저는 이예진 입니다.</p>
      </div> */}

      {
        title.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{setMoal(!modal); setModalTitle(i)}}>{a} <span onClick={(e) => {
                e.stopPropagation();
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy)
              }}>👍</span>{like[i]}</h4>
              <p>안녕하세요. 저는 {name[i]} 입니다.</p>
              <button>글 삭제</button>
            </div>
          )
        })
      }

      <div>
        <button onClick={()=>{setModalTitle(0)}}>글제목0</button>
        <button onClick={()=>{setModalTitle(1)}}>글제목1</button>
        <button onClick={()=>{setModalTitle(2)}}>글제목2</button>
      </div>

      {/* html과 다르게 JSX에서는 무조건 태그를 열었으면 닫아줘야한다 */}
      <input onChange={(e)=>{setInput(e.target.value)}} />

      {
        // 조건문 대신 삼항연산자 사용
        // 조건식 ? 참일때 실행 할 코드 : 거짓일때 실행 할 코드
        // 1 == 1 ? 'ㅇㅇ' : 'ㄴㄴ'
        // null은 텅빈 값
        modal == true ? <Modal modalTitle={modalTitle} title={title}/> : null
      }

      <button
        onClick={() => {
          let copy = [...title]
          copy = copy.sort()
          setTitle(copy)
        }}
      >가나다순 정렬
      </button>

      <button onClick={()=>{
        let copy = [...name]
        copy = ['강해민', '백승호', '신보은']
        setName(copy);
      }}>이름변경
      </button>

      <button onClick={onCreate}>리스트 추가</button>
    </div>
  );
}

// let과 const
// 실수로 수정 했을 때 에러 메세지 출력 (실수 방지!)
// let Modal = () => {
//   return(
//     <div className="modal">
//       <h4>제목 </h4>
//       <p>날짜</p>
//       <p>Lorem ipsum dolor sit.</p>
//   </div>
//   )
// }

function Modal(props) {
  return(
    <div className="modal">
      <h4>{props.title[props.modalTitle]}</h4>
      <p>Lorem ipsum dolor sit.</p>
      <button>글수정</button>
    </div>
  )
}

export default App;
