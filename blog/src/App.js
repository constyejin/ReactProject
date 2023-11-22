import logo from './logo.svg';
import './App.css';

function App() {
  let post = '배고픈데';

  // JSX 문법
  // 1. class 넣을 때 => className
  // 2. 데이터 바인딩 => {변수명}
  // 3. style => style={{이름 : '값'}}
  return (
    <div className="App">
      <div className='nav'>
        <h4 style={{fontSize : '24px'}}>BLOG</h4>
      </div>
      <h4 style={{color : 'red'}}>{post}</h4>
    </div>
  );
}

export default App;
