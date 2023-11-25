import logo from './logo.svg';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import './App.css';
import bg from './images/bg.jpeg';
import data from './data';
import Detail from './Datail';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
          <Link to="/">SHOP</Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#detail">
            <Link to="/detail">Datail</Link>
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

export default App;
