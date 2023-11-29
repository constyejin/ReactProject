import React from 'react'
import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, plusCount } from '../store';

function Cart() {

  // Redux store 가져오기
  // state : Redux store에 있던 모든 state
  let state = useSelector((state) => state)
  let items = state.item;
  // store.js로 요청 보내주는 함수
  let dispatch = useDispatch();

  return (
    <div>
      <h4>{state.user}의 장바구니</h4>
      <button onClick={() => { dispatch(changeName()) }}>변경하기</button>
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
