import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom';
import {useState} from 'react'
import './App.css';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Nav from './component/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

// 1. 전체상품, 로그인, 상품상세
// 2. 전체상품 페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 로그인 전에 상품 디테일 페이지를 클릭할 경우, 로그인 페이지를 먼저 보여준다.
// 5. 로그인이 되어 있다면, 상품 디테일 페이지를 보여준다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 7. 로그아웃 되면 상품 디테일 페이지를 볼 수 없다.
// 8. 로그인하면 로그아웃 버튼이 보이고, 로그아웃 하면 로그인 버튼이 보인다.

function App() {
  // true면 로그인이 된거고, false면 로그인이 안 된거임.
  // 로그인 버튼을 클릭했을 때 값이 true가 되어야 한다.
  const [userLogin, setUserLogin] = useState(false)

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<ProductAll/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        {/* React Restful Route 규칙을 따라서 작성 */}
        <Route path="/product/:id" element={<ProductDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
