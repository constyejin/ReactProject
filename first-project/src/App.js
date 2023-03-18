import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import Box from './component/Box'

function App() {
  // 처음에 어떤 값이 들어갈지 모르니까 일단 null
  // 내가 선택한 값으로 state값을 변경 해준다.
  const [userSelect, setUSerSelect] = useState(null)

  const choice = {
    scissors : {
    name : "Scissors",
    img : "https://cdn.crowdpic.net/detail-thumb/thumb_d_32BEE1E99A88D7D980CB59B9F2E97A66.jpg",
    },
    rock : {
      name : "Rock",
      img : "http://image.dongascience.com/Photo/2016/10/14756318683625.jpg",
    },
    paper : {
      name : "Paper",
      img : "https://images.pexels.com/photos/268349/pexels-photo-268349.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  };

  // userChoice로 값을 받아온다.
  const play = (userChoice)=>{
    console.log(userChoice, "가 선택됨!")
    setUSerSelect(choice[userChoice])
  }

  return (
    <div className='App'>
      <div className="main">
        <Box title="You" item={userSelect}/>
        <Box title="Computer" item={userSelect}/>
      </div>
      <div className='btn-list'>
        {/* play라는 함수에게 매개변수로 값을 전달한다 */}
        {/* play() 함수 호출 / react에서는 UI를 그려줄 때 이 함수를 실행시켜 버린다 
            콜백함수 형태로 함수를 전달 해줘야 한다. 
            함수를 호출하는 형태로 넣어주는 게 아니라 콜백함수 형태로 전달 해줘야 한다.
        */}
        <button onClick={()=> play("scissors")}>가위</button>
        <button onClick={()=> play("rock")}>바위</button>
        <button onClick={()=> play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
