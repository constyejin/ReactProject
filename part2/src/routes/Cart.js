import React from 'react'
import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, plusAge } from '../store/userSlice';
import { increase } from '../store'

function Cart() {

  // Redux store 가져오기
  // state : Redux store에 있던 모든 state
  let state = useSelector((state) => state)
  let items = state.item;
  // store.js로 요청 보내주는 함수
  let dispatch = useDispatch();

  let data =[
    {id : 0, name : '나이키 코르테즈', count : 2},
    {id : 1, name : '나이키 덩크 로우 프리미엄', count : 10}
  ]
  console.log(data[0].count)

  return (
    <div>
      <h4>{state.user.name} {state.user.age}의 장바구니</h4>
      <button onClick={() => { dispatch(changeName()) }}>변경하기</button>
      <button onClick={() => { dispatch(plusAge(100)) }}>+</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(function(a, i) {
              return (
                <tr key={i}>
                  <th>{a.id}</th>
                  <th>{a.name}</th>
                  <th>{a.count}</th>
                  <th>
                    <button onClick={() => {
                      // 버튼 클릭시 수량 + 1
                      // id값에 맞는 배열 번호 수량 + 1 시키기
                      dispatch(increase(1))
                    }}>+</button>
                  </th>
                </tr>
              )
            })
          }
        </tbody>
      </Table> 
    </div>
  )
}

export default Cart
