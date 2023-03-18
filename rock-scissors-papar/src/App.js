import logo from './logo.svg';
import {useState, useTransition} from 'react'
import './App.css';
import Box from './component/Box'

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


function App() {
  // 처음에 사진이 없다가 클릭하면 뜨게 할거니까 초기값을 null로 준다.
  // 내가 선택한 값으로 state값을 변경 해준다.
  const [userSelect, setUSerSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

    // userChoice로 값을 받아온다.
  const play = (userChoice)=>{
    console.log(userChoice, "가 선택됨!")
    setUSerSelect(choice[userChoice]);

    // computerChoice에 randomChoice()함수를 실행했을 때 결과값을 넣어준다.
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    // 유저가 선택한 값과 컴퓨터가 선택한 값을 매개변수로 보내준다.
    setResult(judgment(choice[userChoice], computerChoice))
  }

  const judgment =(user, computer)=>{
    console.log(user, computer)

    // 게임 로직에 대해서 생각해보자
    // 어떻게 두 값을 비교 해야하는지 고민해보기
    // user == computer : Tie
    // user == "rock", computer == "scissors" : user WIN / computer LOSE
    // user == "rock", computer == "paper" : user LOSE / conputer WIN
    // user == "scissors", computer == "paper" : user WIN / conputer LOSE
    // user == "scissors", computer == "rock" : user LOSE / conputer WIN
    // user == "paper", computer == "rock" : user WIN / conputer LOSE
    // user == "paper", computer == "scissors" : user LOSE / conputer WIN
    if(user.name == computer.name) {
      return "tie"
    } else if(user.name == "Rock") return computer.name == "Scissors" ? "win" : "lose"
      // if(computer.name == "Scissors") {
      //   return "WIN"
      // } else {
      //   return "LOSE"
      // }
      else if(user.name == "Scissors") return computer.name == "Paper" ? "win" : "lose"
      else if(user.name == "Paper") return computer.name == "Rock" ? "win" : "lose"
  }

  const randomChoice=()=>{
    // 0부터 1 사이에 있는 랜덤한 값을 반환한다.
    // 랜덤에서 우리가 가져올 수 있는 값은 숫자인데, 이 값을 어떻게 데이터랑 연결 시킬지 고민.
    // 배열의 인덱스 번호를 랜덤으로 선택되게 하면 된다.

    // 그렇다면 객체에서 인덱스 번호를 사용하려면 Array로 만들어 줘야하는데 어떻게 하지?
    // 객체의 키값을 뽑아서 Array로 만들어주는 함수 Object.keys
    let itemArray = Object.keys(choice);
    console.log(itemArray)

    // let randomItem = Math.random()
    // Math.random() 뒤에 * itemArray.length을 곱해준다.
    // 여기서 앞에있는 번호만 따오면 index 번호가 된다. Math.floor(소수점 아래를 버리는 함수)
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log(randomItem);

    let final = itemArray[randomItem];
    console.log(final)

    return choice[final];
  }

  return (
    <div className='App'>
      <div className="box-list">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
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
