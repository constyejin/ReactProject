import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail'
import Login from './page/Login'
import Nav from './component/Nav'
import PrivateRoute from './route/PrivateRoute';

// 1. 전체상품(ProductAll), 로그인, 상세페이지(ProductDetail)
// 2. 로그인 전에 상세페이지 접속시, 로그인 페이지를 먼저 보여준다.
// 3. 로그인이 이미 되어있다면, 상세페이지 보여준다.

// 4. 로그인 하면 로그아웃 버튼이 보이고, 로그아웃 하면 로그인 버튼이 보인다.


function App() {
  // true면 로그인 된 상태, false면 로그인이 안 된 상태
  // 사이트 접속 했을 때 처음 로그인된 상태면 안되니까 기본값이 false
  // 로그인 버튼을 클릭 했을 때 값을 true로 바꿔준다.

  // 로그인 상태를 변경하려면 state변경 함수인 setUserLogin를 이용
  // Login component에서 이 함수를 이용하려면 어떻게 해야할까? => Props
  // 함수도 Props 전송이 가능하다
  const [userLogin, setUserLogin] = useState(false)

  // userLogin 값이 변경될 때 마다 console.log
  useEffect(()=>{
    console.log("Login", userLogin)
  }, [userLogin])

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<ProductAll/>}/>
        <Route path='/login' element={<Login setUserLogin={setUserLogin}/>}/>
        <Route path='/product/:id' element={<PrivateRoute userLogin={userLogin}/>}/>
      </Routes>
    </div>
  );
}

export default App;
