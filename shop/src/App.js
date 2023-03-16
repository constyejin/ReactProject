/* eslint-disable */

import logo from "./logo.svg";
// or less ideally
import {
  Button,
  Navbar,
  Container,
  Nav,
  Row,
  Col,
} from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import data from "./data";
import bgImage1 from "./images/쿼카.png";
import bgImage2 from './images/bg.png'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './pages/Detail';

function App() {
  let [shoes] = useState(data);
  // useNavigate Hook : 페이지 이동을 도와주는 함수
  // Hook : 유용한 것들이 모아져 있는 함수
  let navigate = useNavigate();

  return (
    <div className="App">
      <About/>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Yejin Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate
            ('/')}} className='nav-link'>
            <Link to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link className='nav-link'>
              <Link to='/detail'>Detail</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
        <div>
          <div className='main-bg' style={{backgroundImage: 'url('+ bgImage2 +')'}}></div>
          <div>
            <Row>
              {/* <Card shoes={shoes[0]} i={1}/>
              <Card shoes={shoes[1]} i={2}/>
              <Card shoes={shoes[2]} i={3}/> */}

              {
                shoes.map((a, i)=>{
                  return (
                    <Card shoes={shoes[i]} i={i} key={i}/>
                  )
                })
              }

              {/* <Col>
                <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
                <h4>{shoes[1].title}</h4>
                <p>{shoes[1].content}</p>
                <p>{shoes[1].price}</p>
              </Col>
              <Col>
                <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
                <h4>{shoes[2].title}</h4>
                <p>{shoes[2].content}</p>
                <p>{shoes[2].price}</p>
              </Col> */}
            </Row>
          </div>
        </div>}/>

        {/* <Route path='/detail/0' element={<Detail shoes={shoes}/>}/>
        <Route path='/detail/1' element={<Detail shoes={shoes}/>}/>
        <Route path='/detail/2' element={<Detail shoes={shoes}/>}/> */}

        <Route path='/detail/:id' element={<Detail shoes={shoes} id={shoes.id}/>}/>

        {/* <Route path='/detail' element={
          <div>
            {
              shoes.map((a, i)=>{
                return (
                  <Detail shoes={shoes[i]} i={i} key={i}/>
                )
              })
            }
          </div>
        }/> */}
{/* 
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버</div>}/>
          <Route path='location' element={<div>위치정보다!</div>}/>
        </Route> */}


        <Route path='/about' element={<div>어바웃 페이지</div>}></Route>


        {/* <Route path='/about/member' element={<About/>}/>
        <Route path='/about/location' element={<About/>}/>
        <Route path='*' element={<h1>404 ERROR</h1>}/>

        <Route path='/event' element={<Event/>}>
          <Route path='/event/one' element={<p>첫 주문시 양배추즙 서비스</p>}/>
          <Route path='/event/two' element={<p>생일기념 쿠폰받기</p>}/>
        </Route> */}
      </Routes>
    </div>
  );
}

function Card(props){
  return (
    <Col>
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}won</p>
    </Col>
  )
}

function About() {
  return (
    <div>
      <h3>회사 정보 어쩌구~ 저쩌구~</h3>
      <li>
        <Link to='/about'>fkfkfk</Link>
      </li>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return(
    <div>
      <h1>오늘의 이벤트</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
