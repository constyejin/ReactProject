import React from 'react'
import { useNavigate } from 'react-router-dom'

// 상품정보 객체를 props {item}로 받아온다.
const ProductCard = ({item}) => {

  const navigate = useNavigate()
  
  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }

  return (
    <div className='product-card-list' onClick={showDetail}>
      {/* 아이템이 있는지 먼저 확인한다 */}
      <img src={item?.img}/>
      <div className='card-content-list'>
        <div className='choice-item'>{item?.choice == true ? "베스트셀러" : ""}</div>
        <div>{item?.title}</div>
        {/* 아이템이 있는지 확인하고, new가 true라면 신제품이라고 표시하고 아니라면 빈 문자열 */}
        <div className='new-item'>{item?.new == true ? "신제품" : ""}</div>
        <div className='price-item'>{item?.price}</div>
      </div>
    </div>
  )
}

export default ProductCard
