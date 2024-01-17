import './App.css';
import { useState } from 'react';
import Box from './component/Box';
import AppClass from './AppClass';
import BoxClass from './component/BoxClass';

function App() {
  let counter = 0;
  let [counter2, setCounter2] = useState(0);

  const increase = () => {
    // state를 변경하면 component가 재랜더링 되면서 변수 값을 초기화 시킨다.
    // 유저 버튼 클릭 -> counter += 1 -> setState함수 호출 -> console.log 실행 -> 변수값 1, state는 전 값 -> 함수 끝 -> App 재랜더링 -> let counter = 0으로 초기화 -> update된 state값 출력
    counter += 1;
    // state 변경함수는 비동기적으로 작동한다. (state 함수를 이용하면 그 전 값이 나온다.)
    // 함수가 끝날 때 까지 기다렸다가 state 바꾸는 함수들을 모아서 한번에 실행한다.
    // 변수는 동기적으로 작동하기 때문에 값이 바뀌면 바로 적용된다.
    setCounter2( counter2 += 1 );
    console.log("counter는", counter, "counter2 state는", counter2);
  }
  
  return (
    <div>
      {/* <h3>{counter}</h3>
      <h3>state : {counter2}</h3>
      <button onClick={increase}>Click</button> */}

      <AppClass />
    </div>
  );
}

export default App;
