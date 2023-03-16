/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
// react-router-dom 에서 Routes와 Route, Link를 가져온다.
import {Routes, Route, Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Home from './component/Router/Page'
import About from './component/Router/About'
import Products from './component/Router/Products';
import ProductDetail from './component/Router/ProductDetail';

function App() {
  const [count, setCount] = useState(0)
  // useEffect는 함수인데 매개변수를 두 개를 받는다.
  // 1. 콜백함수
  // 2. Array
  useEffect(()=>{
    console.log("useEffect1")
  },[])

  useEffect(()=>{
    console.log("useEffect2", count)
  },[count])

  return (
    <div className="App">
      {console.log('render')}
      <h3>{count}</h3>
      <button onClick={()=>{setCount(count + 1)}}>Click</button>

      {/* id 뒤에 있는 값은 파라미터기 때문에 값이 가변적이다.
          그래서 값이 있기만 하면 이 페이지를 보여준다  */}
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Products/:id' element={<ProductDetail/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
