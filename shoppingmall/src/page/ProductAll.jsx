import React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';


  const ProductAll = () => {  
    // state를 만든 후 우선 비어있는 Array 할당
    const [productList, setProductList] = useState([])
    
    const [query, setQuery] = useSearchParams();

    const getProducts= async () => {
      // q라고 시작되는 아이템을 가져다가 searchQuery 넣어준다. 쿼리 값이 없을 때는 빈 스트링을 넣어준다.
      let searchQuery = query.get('q') || "";
      console.log("쿼리값", searchQuery)

      // 모든 데이터를 가진 주소를 불러준다.
      let url = `http://localhost:5000/products?q=${searchQuery}`
      // url을 fetch 해줘라
      let response = await fetch(url);
      // response에서 json을 뽑아와라
      let data = await response.json();
      console.log(data);
      
      // state 변경 함수를 호출해서 data를 넣어준다.
      setProductList(data)
    };
 
    // useEffect 배열에 값이 없으면 프로젝트 렌더 후 딱 한번만 호출된다.
    // query 값이 바뀔 때 마다 재호출 해달라고 요청한다.
    useEffect(()=>{
      getProducts()
    }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {
            productList.map((menu, i) => {
              return (
                <Col lg={4} md={10} key={i}>
                  <ProductCard item={menu}/>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
