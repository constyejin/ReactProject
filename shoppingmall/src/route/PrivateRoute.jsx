import React from 'react'
import Login from '../page/Login'
import ProductDetail from '../page/ProductAll'
import { Navigate } from 'react-router-dom'

// 조건부 렌더링 
// userLogin이 true라면 ProductDetail 페이지
// userLogin이 false라면 Login 페이지

// 삼항연산자로 userLogin === true ? 
// 
const PrivateRoute = (userLogin) => {
  return userLogin === true ? <ProductDetail/> : <Navigate to='/login'/>
}

export default PrivateRoute
