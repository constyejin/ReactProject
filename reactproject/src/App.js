/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
// react-router-dom 에서 Routes와 Route, Link를 가져온다.
import {Routes, Route, Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
// import Home from './component/Router/Page'
import About from './component/Router/About'
import Products from './component/Router/Products';
import ProductDetail from './component/Router/ProductDetail';
import Detail from './component/Detail';

function App() {
  const [count, setCount] = useState(0)
  // useEffect는 함수인데 매개변수를 두 개를 받는다.
  // 1. 콜백함수
  // 2. Array

  // render될 때 1,2가 다 찍힌다.
  // render 후에 1은 가만히 있고 2만 나온다
  // state값이 업데이트 될 때 마다 2가 찍힌다.
  // array안에 들어갈 경우 
  useEffect(()=>{
    console.log("useEffect1")
  },[])

  useEffect(()=>{
    console.log("useEffect2", count)
  },[count])
  

  return (
    <div className="App">
      <Detail/>
      {console.log('render')}
      <h3>{count}</h3>
      <button onClick={()=>{setCount(count + 1)}}>Click</button>

      {/* id 뒤에 있는 값은 파라미터기 때문에 값이 가변적이다.
          그래서 값이 있기만 하면 이 페이지를 보여준다  */}
      {/* <Routes>
        <Route path='/' element={<h1>메인페이지</h1>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Products/:id' element={<ProductDetail/>}/>

        <Route path='/about' element={<About/>}>
          <Route path='member' element={<h1>멤버~~~~</h1>}/>

          <Route path='location' element={<h1>위치정보 페이지</h1>}/>
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
