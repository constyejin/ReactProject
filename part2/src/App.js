import logo from './logo.svg';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import './App.css';
import bg from './images/bg.jpeg';
import data from './data';
import Detail from './routes/Datail';
import About from './routes/About'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';

function App() {
  let [shoes, setShoes] = useState(data);
  // 페이지 이동 도와주는 함수 useNavigate();
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand onClick={() => {navigate('/')}}>SHOP
          {/* <Link to="/">SHOP</Link> */}
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => {navigate('/detail')}}>Detail
            {/* <Link to="/detail">Datail</Link> */}
          </Nav.Link>
          <Nav.Link href="#shop">Shop</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'></div>
            <Container className='shoe-list'>
              <Row>
                {
                  shoes.map(function(shoes, i){
                    return <Item shoes={shoes} key={i} ></Item>
                  })
                }
              </Row>
            </Container>  
          </>
        }/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='*' element={<div>404 ERROR</div>}/>
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>Member</div>}></Route>
          <Route path='location' element={<div>Location</div>}></Route>
        </Route>
        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<p>첫 주문시 양말 서비스</p>}/>
          <Route path='two' element={<p>생일기념 쿠폰 받기</p>}/>
        </Route>
      </Routes>
      {/* style={{ backgroundImage : `url(${bg})`}} */}
    </div>
  );
}

function Item(props) {
  return (
    <Col>
      <img src={props.shoes.img} alt="" width="100%"/>
      <h5>{props.shoes.title}</h5>
      <p>{props.shoes.content}</p>
      <p></p>
    </Col>
  )
}

function Event() {
  return (
    <div>
      <h2>Today Event!</h2>
      <Outlet/>
    </div>
  )
}
export default App;
