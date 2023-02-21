import logo from './logo.svg';
import './App.css';

function App() {
  let list = 'DW아카데미 503호';
  // 바닐라JS 코드 (변수에 있는 데이터 html에 넣기)
  // JSX 중괄호 문법을 사용하면 더 쉽고 간단한게 할 수 있다 (id, className, src, href등 사용 가능!)
  // document.querySelector('h4').innerHTML = list;

  return (
    <div className="App">
      <div className="black-nav">
        <h3 style={{color : 'red'}}>BLOG</h3>
      </div>
      <h4>{list}</h4>
    </div>
  );
}

export default App;
