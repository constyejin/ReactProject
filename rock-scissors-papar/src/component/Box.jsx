import React from 'react'

const Box = (props) => {
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      {/* 
          리액트 컴포넌트는 UI를 리턴할 때 보여주고자 하는 값이 없다면 에러를 일으킨다.
          이런 문제를 해결 할 수 있는 방법 => 조건부 렌더링으로 UI를 내가 원하는 조건일 때만 보여준다.
          
          null이 아닌 값이 있을 때만 렌더링이 되게 한다. 
          item이 null이 아니라면 우항의 값을 렌더링 해준다.
          null은 자동으로 false를 리턴하니까 우항 실행 X (렌더링X)
      */}
      <img src={props.item && props.item.img}/>
      <h2>{props.result}</h2>
    </div>
  )
}

export default Box
