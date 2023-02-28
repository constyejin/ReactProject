/* eslint-disable */

import logo from "./logo.svg";
// or less ideally
import {
  Button,
  Navbar,
  Container,
  Nav,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import "./App.css";
import bgImage from "./images/쿼카.png";
import data from "./data";
import { useState } from "react";


function App() {
  let [items, setItems] = useState(data);
// console.log(items[0].price)

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 코드 사이에 변수 넣는 방법 1.홑 따옴표 2. 백틱 */}
      <div
        className="main-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <Row className="card-list">
        <ItemList/>
        <ItemList/>
        <ItemList/>

        <Col>
          <Card className="text-center card-item">
            <Card.Header>{items[1].title}</Card.Header>
            <Card.Body>
              <img src={bgImage} alt="" width="50%" />
              <Card.Title>{items[1].content}</Card.Title>
              <Card.Text>{items[1].price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="text-center card-item">
            <Card.Header>{items[2].title}</Card.Header>
            <Card.Body>
              <img src={bgImage} alt="" width="50%" />
              <Card.Title>{items[2].content}</Card.Title>
              <Card.Text>{items[2].price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Button variant="primary" size="lg">
        Block level button
      </Button>
    </div>
  );
}


function ItemList(props) {
  return(
    <Col>
      <Card className="text-center card-item">
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
          <img src={bgImage} alt="" width="50%" />
          <Card.Title>dfghsdg</Card.Title>
          <Card.Text>sdhdsh</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default App;
