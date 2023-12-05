import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Nav, Tab } from 'react-bootstrap';
import {Context1} from '../App';
import { useDispatch } from 'react-redux';
import { addItem } from '../store';

// class Detail2 extends React.Component {
//   componentDidMount(){
//     // component mount시 실행
//   }
//   componentDidUpdate(){
//     // component update시 실행
//   }
//   componentWillUnmount(){
//     // component unmount시 실행
//   }
// }


// let BlackBox = styled.div`
//   background : black;
//   padding : 40px;
// `

// let Btn = styled.button`
// color : ${props => props.bg == 'blue' ? 'white' : 'black'};
//   background : ${props => props.bg};
//   border : none;
//   border-radius : 8px;
//   padding : 20px;
// `

function Detail(props){
  // 보관함 해체
  let {stock} = useContext(Context1);

  // Detail 페이지 로드시 opacity : 0 -> 1 Animation
  let [pageFade, setPageFade] = useState('');

  useEffect(() => {
    let timer = setTimeout(() => { setPageFade('end') }, 100); // 2번
    
    return(() => {
      clearTimeout(timer);
      setPageFade(''); // 1번
    })
  },[])


  useEffect(() => {
    // component mount, update(재랜더링)시 실행
    let timer = setTimeout(() => {
      setAlert(false);
    },2000)

    // clean up function
    // useEffect 동작 전에 실행되는 return () => {}
    return() => {
      // clean up function은 mount시 실행 X unmount시 실행 O
      // 기존 코드 치울 때 많이 사용
      clearTimeout(timer);
    }

    // useEffect 실행조건 넣을 수 있는 곳 []
    // [count] 대괄호 안 state가 변할 때만 실행 (+ mount시)
  }, [])

  let {id} = useParams();
  // .find(), .filter() 사용
  // array 자료 안에서 원하는 항목 찾기
  // find() 콜백함수에 파라미터 넣으면 array에 있던 자료를 뜻한다. (x)
  let findItem = props.shoes.find(function(x){
    return x.id == id;
  })
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [val, setVal] = useState('');
  let [tab, setTab] = useState(0);
  let dispatch = useDispatch();


  useEffect(() => {
    if(isNaN(val)) {
      alert('숫자만 입력해라.');
    } else {
      // console.log(val);
    }
  }, [val])

  return (
    <div className={`container start ${pageFade}`}>
      {
        alert == true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null
      }
      {/* <BlackBox>
        <Btn bg="blue">Blue Button</Btn>
        <Btn bg="yellow">Yellow Button</Btn>
      </BlackBox> */}

      <div className="row info-box">
        <div className="col-md-6">
          <img src={findItem.img} width="100%" />
        </div>
        <div className="col-md-6">
          <input onChange={(e) => {
            setVal(e.target.value);
          }} type="text" />
          <h4 className="pt-5">{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}</p>
          <button onClick={() => {
            dispatch(addItem( { id : findItem.id, title : findItem.title, count : findItem.price } ))
          }} className="btn btn-danger">주문하기</button> 
        </div>
      </div>
      
      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => {setTab(0)}} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => {setTab(1)}}  eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => {setTab(2)}}  eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab}/>
    </div> 
  )
}

// Tip. props.tab 이 귀찮다면 {props 전달 이름}
function TabContent({tab}) {
  // if(tab == 0) {
  //   return <div>Content 0</div>
  // } else if(tab == 1) {
  //   return <div>Content 1</div>
  // } else if (tab == 2) {
  //   return <div>Content 2</div>
  // }
  
  let [fade, setFade] = useState('');
  let {stock} = useContext(Context1);
  
  // tab state가 변경될 때 마다 실행
  useEffect(() => {
    // React automatic batching
    // state 변경하는 함수들이 근처에 있다면 합쳐서 한 번만 state를 변경한다. => setTimeout()으로 미세한 시간차 두기
    let timer = setTimeout(() => { setFade('end') },100); // 2번
    
    return(() => {
      clearTimeout(timer);
      setFade(''); // 1번
    })
  }, [tab]);

  return (
    <div className={`start ${fade}`}>
      {stock}
      {[<div>Content 0</div>, <div>Content 1</div>, <div>Content 2</div>][tab]}
    </div>
  )
}

export default Detail;
