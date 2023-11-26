import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

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
  // useEffect(() => {
  //   // component mount, update(재랜더링)시 실행
  //   let timer = setTimeout(() => {
  //     setAlert(false);
  //   },2000)

  //   // clean up function
  //   // useEffect 동작 전에 실행되는 return () => {}
  //   return() => {
  //     // clean up function은 mount시 실행 X unmount시 실행 O
  //     // 기존 코드 치울 때 많이 사용
  //     clearTimeout(timer);
  //   }

  //   // useEffect 실행조건 넣을 수 있는 곳 []
  //   // [count] 대괄호 안 state가 변할 때만 실행 (+ mount시)
  // }, [])

  let {id} = useParams();
  // .find(), .filter() 사용
  // array 자료 안에서 원하는 항목 찾기
  // find() 콜백함수에 파라미터 넣으면 array에 있던 자료를 뜻한다. (x)
  let findItem = props.shoes.find(function(x){
    return x.id == id;
  })
  let [count, setCount] = useState(0);
  let [val, setVal] = useState('');

  useEffect(() => {
    if(isNaN(val)) {
      alert('숫자만 입력해라.');
    } else {
      console.log(val);
    }
  }, [val])

  return (
    <div className="container">
      {/* {
        alert == true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null
      } */}
      {/* <BlackBox>
        <Btn bg="blue">Blue Button</Btn>
        <Btn bg="yellow">Yellow Button</Btn>
      </BlackBox> */}

      <div className="row">
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
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}

export default Detail;
