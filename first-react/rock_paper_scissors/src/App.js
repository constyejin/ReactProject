import './App.css';
import Box from './component/Box';

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위, 바위, 보 버튼이 있다.
// 3. 클릭한 버튼 값이 박스에 보인다.
// 4. 컴퓨터는 랜던한 값이 선택되게 한다.
// 5. 3,4의 결과를 가지고 승패를 따진다.
// 6. 승패 결과에 따라 border-color를 변경한다. 
// (win - green, lose - red, tie - black)
function App() {
  return (
    <div className='main'>
      <Box/>
      <Box/>
    </div>
  );
}

export default App;
