import React from 'react'
import { useState, memo, useMemo } from 'react'
import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, plusAge } from '../store/userSlice';
import { decrease, increase, removeItem } from '../store'

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
  // console.log(data[0].count)
  let [count, setCount] = useState(0)

  let result = cal();
  // 컴포넌트 렌더링시 1회만 실행한다.
  // useEffect => HTML 로딩 끝나면 실행
  // useMemo => 렌더링 될 때 같이 실행 (실행시점 차이)
  useMemo(() => {return cal()}, [state])

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
                  <th>{a.title}</th>
                  <th>{a.count}</th>
                  <th>
                    <button onClick={() => {
                      // console.log(i)
                      // 버튼 클릭시 수량 + 1
                      // id값에 맞는 배열 번호 수량 + 1 시키기
                      // console.log(state.item[i].id)
                      dispatch(increase(items[i].id))
                    }}>+</button>
                    <button onClick={() => {
                      dispatch(decrease(items[i].id))
                    }}>-</button>
                    <button onClick={() => {
                      dispatch(removeItem(i))
                    }}>삭제</button>
                  </th>
                </tr>
              )
            })
          }
        </tbody>
      </Table> 
      <Child count={count}/>
      <button onClick={() => { setCount(count + 1) }}>BUTTON</button>
    </div>
  )
}

// 꼭 필요할 때만 재렌덜이 하려면 => memo
// memo의 원리 : props가 변할 때만 재렌더링 해준다.
let Child = memo( function() {
  console.log('재렌더링')
  return <div>자식 컴포넌트</div>
})

// useMemo 사용법
function cal() {
  // return 반복문 돌린 결과
}

export default Cart
