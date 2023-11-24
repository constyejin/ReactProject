import logo from './logo.svg';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import bg from './images/bg.jpeg';

function App() {
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
      
      <Container>
        <Row>
          <Col>
           <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ff9695f9-7ffb-4dbf-846f-60a9d002c0c9/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-sp-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-aUzZtgsr.png" alt="" width="100%"/>
           <h4>상품명</h4>
           <p>상품설명</p>
          </Col>
          <Col>
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bf66bd79-b7de-4263-8e93-87ee9ed6489b/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-QPzSIPpT.png" alt="" width="100%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col>
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd4ebf8f-7b88-4ec6-a295-998478dd6b1b/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-JfPpmnef.png" alt="" width="100%"/>
            
            {/* public 폴더 이미지 사용하는 권장 방식 */}
            {/* <img src={process.env.PUBLIC_URL + '/nike1.webp'} alt="" /> */}
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
