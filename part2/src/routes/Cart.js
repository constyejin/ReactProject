import React from 'react'
import {Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart() {

  // Redux store 가져오기
  // state : Redux store에 있던 모든 state
  let items = useSelector((state) => state.item)
  console.log(items)

  return (
    <div>
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
                  <th>변경하기</th>
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
