import React from 'react'
import { useState, useEffect } from 'react'
import ProductCard from '../component/ProductCard';


  const ProductAll = () => {  
    // state를 만든 후 우선 비어있는 Array 할당
    const [productList, setProductList] = useState([])

    const getProducts= async () => {
      // 모든 데이터를 가진 주소를 불러준다.
      let url = 'http://localhost:5000/products'
      // url을 fetch 해줘라
      let response = await fetch(url);
      // response에서 json을 뽑아와라
      let data = await response.json();
      console.log(data);
      
      // state 변경 함수를 호출해서 data를 넣어준다.
      setProductList(data)
    };
 
    useEffect(()=>{
      getProducts()
    }, []);

  return (
    <div>
      <ProductCard/>
    </div>
  )
}

export default ProductAll
