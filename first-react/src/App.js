import './App.css';
import { useState } from 'react';
import Box from './component/Box';

function App() {
  let counter = 0;
  let [counter2, setCounter2] = useState(0);

  const increase = () => {
    counter += 1;
    // state 변경함수는 비동기적으로 작동한다. (state 함수를 이용하면 그 전 값이 나온다.)
    // 함수가 끝날 때 까지 기다렸다가 state 바꾸는 함수들을 모아서 한번에 실행한다.
    // 변수는 동기적으로 작동하기 때문에 값이 바뀌면 바로 적용된다.
    setCounter2( counter2 += 1 );
    console.log("counter는", counter, "counter2 state는", counter2);
  }
  return (
    <div>
      <h3>{counter}</h3>
      <h3>state : {counter2}</h3>
      <button onClick={increase}>Click</button>
    </div>
  );
}

export default App;
