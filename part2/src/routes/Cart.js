import React from 'react'
import {Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart() {

  // Redux store 가져오기
  // Redux store에 있던 모든 state가 남음
  let a = useSelector((state) => { return state })
  console.log(a.user)

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
          <tr>
            <td>1</td>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
        </tbody>
      </Table> 
    </div>
  )
}

export default Cart
