import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


let Btn = styled.button`
  // 외부 라이브러리 사용법 (props 사용)
  background-color: ${props => props.bg};
  color : white;
  padding : 10px;
  border : none;
  border-radius : 5px;
`

let Box = styled.div`
  width : 100px;
  height: 200px;
  background-color : #000;
`

let NewBtn = styled(Btn)`
  margin : 10px;
  border: 2px solid ${props => props.bg == 'black' ? '#fff' : 'red'}
`

function Detail(props) {
// class 예전 문법
// class Detail2 extends React.Component {
//   componentDidMount(){
//     // 컴포넌트 mount시 코드 실행
//   }
//   componentDidUpdate() {
//     // 컴포넌트 update시 코드 실행
//   }
//   componentWillUnmount() {
//     // 컴포넌트 unmount시 코드 실행
//   }
// }

  const [count, setCount] = useState(0);
  const [alert, setAlert] = useState(true)
  // useEffect(()=>{
  //   // Detail 컴포넌트가 mount, update(재렌더링) 될 때 코드 실행
  //   // Debugging을 위해서 console.log 두 번 찍힘 => 실제 코드는 한 번만 실행됨.
  //   for(let i = 0; i < 10000; i ++) {
  //     console.log('gg')
  //   }
  // })
  // console.log('안녕?')

  let {id} = useParams();
  // console.log(id);
  let fintItem = props.shoes.find(function(x){
    return x.id == id
  })

  useEffect(()=>{
    setTimeout(()=>{
      setAlert(false)
    }, 1000)
  },[count])

  return (
    <div className="container">
      {
        alert == true ? <Alert/> : null
      }
      {/* <Detail2/> */}
      {/* <Box>
       <Btn bg="blue">Button</Btn>
       <Btn bg="red">Button</Btn>
       <Btn bg="green">Button</Btn>
       <NewBtn bg="black">BTN</NewBtn>
      </Box> */}

      {/* {count} */}
      <button onClick={()=>{setCount(count + 1)}}>+1</button>
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes"+ (props.shoes[id].id+1) +".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}won</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}

function Alert() {
  return (
    <div className='alert alert-warning'>
      2초이내 구매시 할인
    </div>
  )
}

export default Detail;
