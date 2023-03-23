import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container,Row, Col } from 'react-bootstrap'

const ProductDetail = () => {
  // url 파라미터 값을 읽을 수 있는 훅 => useParams
  let {id} = useParams();
  const [product, setProduct] = useState(null)

  const getProcutDetail = async () => {
    // API 호출
    // product 뒤에 id값은 내가 클릭한대로 변경되어야 하니까 동적인 값
    
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)

    setProduct(data)
  }

  useEffect(() => {
    // productDetail을 가져오는 함수 호출
    getProcutDetail()
  }, [])

  return (
    <Container>
      <Row style={{marginTop : "50px"}}>
        <Col>
          <img width={500} src={product?.img} alt="" />
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
