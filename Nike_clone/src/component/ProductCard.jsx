import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({menu}) => {
  const navigate = useNavigate()

  const showDetail = () => {
    navigate(`/product/${menu.id}`)
  }

  return (
    <div className='product-card-list' onClick={showDetail}>
      <img src={menu?.img} alt="" />
      <div className='card-content-list'>
        <div className='choice-item'>{menu.choice == true ? "베스트셀러" : ""}</div>
        <div>{menu.title}</div>
        <div className='new-item'>{menu.new == true ? "신제품" : ""}</div>
        <div className='price-item'>{menu.price}</div>
      </div>
    </div>
  )
}

export default ProductCard
