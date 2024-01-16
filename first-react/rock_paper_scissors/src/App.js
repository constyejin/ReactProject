import { useState } from 'react';
import './App.css';
import Box from './component/Box';

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위, 바위, 보 버튼이 있다.
// 3. 클릭한 버튼 값이 박스에 보인다.
// 4. 컴퓨터는 랜던한 값이 선택되게 한다.
// 5. 3,4의 결과를 가지고 승패를 따진다.
// 6. 승패 결과에 따라 border-color를 변경한다. 
// (win - green, lose - red, tie - black)

const choice = {
  rock : {
    name : "Rock",
    img : "https://image.auction.co.kr/itemimage/28/65/8e/28658ea541.jpg"
  },
  scissors : {
    name : "Scissors",
    img : "https://image.yes24.com/momo/TopCate3686/MidCate6/368554599.jpg"
  },
  paper : {
    name : "Paper",
    img : "https://img.chuing.net/i/HGeNNJp/slider-pic-102.png"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
  }

  return (
    <div>
      <div className='center'>
        <Box title="You" item={userSelect}/>
        <Box title="Computer"/>
      </div>

      <div className='center'>
        <button onClick={() => {play("rock")}}>Rock</button>
        <button onClick={() => {play("paper")}}>Paper</button>
        <button onClick={() => {play("scissors")}}>Scissors</button>
      </div>
    </div>
  );
}

export default App;
