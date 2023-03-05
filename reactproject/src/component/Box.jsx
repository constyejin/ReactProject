import React from 'react';
import './Box.css';

// 컴포넌트 생성시 주의사항
// 1. 컴포넌트 이름은 반드시 대문자로 시작해야 한다.
// 리액트는 태그가 대문자로 시작하는지 여부로 컴포넌트와 일반 HTML태그를 구별한다.
// 소문자로 시작하면 리액트는 이걸 HTML 태그로 분류하기 때문에 에러를 일으킬 수 있다.
// * 반드시 컴포넌트의 첫 글자는 대문자로!
// 2. 기능별로 나누어야 개발할 때나, 테스트 또는 유지보수 할 때 용이하다.
// 3. 나중에 재활용 될 경우를 대비해 한 컴포넌트에는 하나의 기능만 있는 게 좋다.

// But, 컴포넌트를 나누는 절대적인 기준은 없음. 회사에 따라 규칙이 다 다름
// 코드를 직접 짜면서 본인의 기준을 만드는 게 좋음
function Box(props) {
  const clickMe = ()=>{
    alert("리액트 너무 재밌다!");
  }
  return (
    <div className='box'>
      <h1>box{props.num}</h1>
      <h2>{props.name}</h2>
      <button onClick={clickMe}>click</button>
    </div>
  )
}

export default Box;
