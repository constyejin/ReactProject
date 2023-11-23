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
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  // State가 여러 곳에서 필요하다면 가장 상위 component인 App에 생성
  let [modalTitle, setmodalTitle] = useState(0);

  // JSX 문법
  // 1. class 넣을 때 => className
  // 2. 데이터 바인딩 => {변수명}
  // 3. style => style={{이름 : '값'}}

  return (
    <div className="App">
      <div className='nav'>
        <h4 style={{fontSize : '24px'}}>ReactBlog</h4>
      </div>
      {
        title.map(function(a, i){
          // 1. array 자료 갯수만큼 함수안의 코드 실행
          // 2. 함수의 파라미터는 array안에 있는 자료
          // 3. return 값을 array로 담아준다.
          return (
            <div className="list" key={i}>
              <div className='list-box'>
                <h4 onClick={() => {
                  modal == true ? setModal(false) : setModal(true);  
                  setmodalTitle(i);
                }}>{a}
                  <span onClick={() => {
                      // like state변경 함수(setLike)를 호출
                      // [0,0,0] 배열에서 클릭된 순서 0,1,2번째 값을 하나 증가 시킨다.
                      let newLike = [...like];
                      newLike[i] = newLike[i] + 1;
                      setLike(newLike);
                    }}>👍🏻</span>
                  <span className='like-count'>{like[i]}</span>
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
          )
        })
      }
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
        // 부모 -> 자식 state 전송하는 방법
        // 1. <자식컴포넌트 작명={state이름}
        // 2. 자식 컴포넌트에서 props 파라미터 등록 후 props.작명 사용
        modal == true ? <Modal title={title} modalTitle={modalTitle} backColor={'skyblue'}/> : null
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
  // props : 자식이 부모가 가지고 있는 state 사용 가능!
  function Modal(props){
    return (
      <div className="modal" style={{background : props.backColor}}>
        <h4>{props.title[props.modalTitle]}</h4>
        <p>Date</p>
        <p>Content</p>
        <button>글수정</button>
      </div>
    )
  }

export default App;
