import React from 'react'
// import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  // const params = useParams();
  
  // Destructuring 
  // object를 리턴 값으로 받을 때 안에 있는 키 값을 멘션하면 그 키 값을 바로 사용가능
  // const {id} = useParams();

  // 콘솔 찍어보면 object가 반환되는데 그 오브젝트 안에는 
  // id라는 key값이 있고, 2라는 value가 있다. 
  // 이 id라는 key값은 '/Products/:id' 여기서 온다. 
  // useParams라는 리액트 훅을 이용하면 url의 id값을 가져올 수 있다.
  // console.log(params);

  return (
    <div>
      <h2>디테일 페이지~~~~</h2>
      {/* <h3>id : {id}</h3> */}
    </div>
  )
}

export default ProductDetail
