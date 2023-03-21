import React from 'react'

// const Box = (props) => {
//   return (
//     <div className='box'>
//       <h1>{props.title}</h1>
//       {/* 
//           리액트 컴포넌트는 UI를 리턴할 때 보여주고자 하는 값이 없다면 에러를 일으킨다.
//           이런 문제를 해결 할 수 있는 방법 => 조건부 렌더링으로 UI를 내가 원하는 조건일 때만 보여준다.
          
//           null이 아닌 값이 있을 때만 렌더링이 되게 한다. 
//           item이 null이 아니라면 우항의 값을 렌더링 해준다.
//           null은 자동으로 false를 리턴하니까 우항 실행 X (렌더링X)
//       */}
//       <img src={props.item && props.item.img}/>
//       <h2>{props.result}</h2>
//     </div>
//   )
// }


const Box = (props) => {
  let result;

  if (
    // title이 "Computer"고, result가 "tie"나 ""(빈 문자열)이 아닌 경우, 
    // result 값이 "win"이면 "lose"로, "lose"면 "win"으로 변경한 값을 result 변수에 할당한다. 
    // 이렇게 되면 result가 사용자가 이긴 경우 "Computer"는 "lose"로, 사용자가 진 경우 "win"으로 설정된다.
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) { 
    // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
    result = props.result === "win" ? "lose" : "win";
  } else {
    // 위의 경우가 아니라면 props 로 전달된 결과를 그대로 쓴다.
    result = props.result;
  }
  if (props.title === "Computer") {
    console.log("computer", result);
  }

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <h2>{props.item && props.item.name}</h2>
      <img src={props.item && props.item.img} />
      <h2>{result}</h2>
    </div>
  );
};


export default Box
