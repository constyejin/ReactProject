import logo from './logo.svg';
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
import { createContext, useState } from 'react';
import './App.css';
import bg from './images/bg.jpeg';
import data from './data';
import Detail from './routes/Datail';
import Cart from './routes/Cart'
import About from './routes/About'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import axios from 'axios';

// Context API로 TabContent에 state 전송
export let Context1 = createContext();

function App() {
  // localStorage에 array, object 저장하려면 JSON으로 변환
  // array, object -> JSON 변환 JSON.stringfy()
  let obj = {name : 'Lee'};
  localStorage.setItem('data', JSON.stringify(obj));
  // JSON -> array, object 변환 JSON.parse()
  let get = localStorage.getItem('data');
  console.log(JSON.parse(get).name);


  let [shoes, setShoes] = useState(data);
  let [stock, setStock] = useState([10, 11, 12]);
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
          <Nav.Link onClick={() => {navigate('/cart')}}>Cart</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'></div>
            <Container className='shoe-list'>
              <Row>
                <p className='sort-list'>
                  <span onClick={(e) => {
                    let copy = [...shoes];
                    let sortTitle = copy.sort((a,b) => {
                      if(a.title > b.title) return 1;;
                      if(a.title < b.title) return -1;
                      return 0;
                    })
                    setShoes(sortTitle);
                  }}>이름순</span>
                  <span className='line'>|</span>
                  <span onClick={() => {
                    let copy = [...shoes];
                    let sortPrice = copy.sort((a,b) => {
                      if(a.price > b.price) return 1;
                      if(a.price < b.price) return -1;
                      return 0;
                    })
                    setShoes(sortPrice);
                  }}>가격순</span>
                </p>
                {
                  shoes.map(function(shoes, i){
                    return <Item shoes={shoes} key={i} ></Item>
                  })
                }
              </Row>
            </Container>  
            <Button onClick={() => {
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                  // ajax 요청 성공시
                  result.data.forEach(item => {
                    console.log(item);
                    item.img = 'https://mblogthumb-phinf.pstatic.net/20160728_98/ppanppane_1469696985810MaPSh_PNG/%B3%AA%C0%CC%C5%B0_%B7%CE%B0%ED_%283%29.png?type=w800';
                  });
                  let add = [...shoes, ...result.data];
                  setShoes(add);
                }).catch(() => {
                  // ajax 요청 실패시
                  console.log('실패함ㅠ')
                })
            }} variant="dark">MORE</Button>
          </>
        }/>
        <Route path='/detail/:id' element={
          <Context1.Provider value={{stock, shoes}}>
            <Detail shoes={shoes}/>
          </Context1.Provider>
        }/>
        <Route path='*' element={<div>404 ERROR</div>}/>
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>Member</div>}></Route>
          <Route path='location' element={<div>Location</div>}></Route>
        </Route>
        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<p>첫 주문시 양말 서비스</p>}/>
          <Route path='two' element={<p>생일기념 쿠폰 받기</p>}/>
        </Route>

        <Route path='/cart' element={<Cart/>}/>
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
      <p>{props.shoes.price}</p>
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
