import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let {id} = useParams();
  const [product, SetProduct] = useState(null)

  const getProductDetail = async () => {
    // API 호출
    // products/ 뒤에 값은 내가 클릭한 값이 들어와야 한다.
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)

    SetProduct(data)
  }
  
  useEffect(() => {
    getProductDetail()
  }, [])

  return (
    <Container>
      <Row style={{marginTop : "50px"}}>
        <Col>
          <img width={500} src={product?.img}/>
        </Col>
        <Col>
          <h2>{product?.title}</h2>
          <div>{product?.price}</div>
          <div>사이즈 : {product?.size}</div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
