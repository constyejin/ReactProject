import logo from './logo.svg';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import './App.css';
import bg from './images/bg.jpeg';
import data from './data';

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#shop">Shop</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      {/* style={{ backgroundImage : `url(${bg})`}} */}
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
