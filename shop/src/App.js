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
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Yejin Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/detail" className='nav-link'>Detail</Link>
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
                    <Card shoes={shoes[i]} i={i}/>
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
        <Route path='/detail' element={<div>상세 페이지</div>}/>
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
      <p>{props.shoes.price}</p>
    </Col>
  )
}

export default App;
