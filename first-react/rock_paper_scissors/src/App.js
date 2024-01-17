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
    img : "https://toppng.com/uploads/preview/rock-paper-scissors-circle-11562962494dqcjusyikw.png"
  },
  scissors : {
    name : "Scissors",
    img : "https://yun7420.github.io/rockscissorspaper-2023/static/media/scissors.89d557044c485b55ba7c.png"
  },
  paper : {
    name : "Paper",
    img : "https://yun7420.github.io/rockscissorspaper-2023/static/media/paper.d7fa16464d6c5c437fc5.png"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [comResult, setComresult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let computerChoice = ramdomChoice();
    setComputerSelect(computerChoice);

    let userResult = judgement(choice[userChoice], computerChoice);
    setResult(userResult);
    setComresult(comJudgment(result))
  }

  const ramdomChoice = () => {
    // Object.keys : 객체의 key값을 뽑아서 array로 만들어준다.
    let itemArr = Object.keys(choice);
    // Math.floor() : 소수점 아래 숫자 제거
    // Math.random() : 0부터 1사이의 랜덤 값 출력
    let randomItem = Math.floor(Math.random() * itemArr.length);
    let final = itemArr[randomItem]
    return choice[final];
  }

  const judgement = (user, computer) => {
    // user와 computer 값이 같으면 tie
    // user가 Rock일 때 computer가 Scissors면 user WIN
    // user가 Rock일 때 computer가 Paper면 user LOSE
    // user가 Scissors일 때 computer가 Paper면 user WIN
    // user가 Scissors일 때 computer가 Rock이면 user LOSE
    // user가 Paper일 때 computer가 Rock이면 user WIN
    // user가 Paper일 때 computer가 Scissors면 user LOSE
    if(user.name == computer.name) {
      return "tie"
    } else if(user.name == "Rock") return computer.name == "Scissors" ? "win" : "lose"
    else if(user.name == "Scissors") return computer.name == "Paper" ? "win" : "lose"
    else if(user.name == "Paper") return computer.name == "Rock" ? "win" : "lose"
  }

  const comJudgment = (result) => {
    return result == "win" ? "lose" : result == "tie" ? "tie" : "win";
  }
 
  return (
    <div className='wrapper'>
      <div className='main-box'>
        <div className='score-box'>
          <div className="score">
            <p>1</p>
            <p> : </p>
            <p>0</p>
          </div>
         <button>Reset</button>
        </div>
        <div className='main-box-list'>
          <Box title="User" item={userSelect} result={result} />
          <Box title="Computer" item={computerSelect} result={comResult} />
        </div>
        <div className="btn-list">
          <button onClick={() => {play("rock")}}>Rock</button>
          <button onClick={() => {play("paper")}}>Paper</button>
          <button onClick={() => {play("scissors")}}>Scissors</button>
        </div>
      </div>
    </div>
  );
}

export default App;
