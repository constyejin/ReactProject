import React from 'react'

// 상품정보 객체를 props {item}로 받아온다.
const ProductCard = ({item}) => {
  return (
    <div>
      {/* 아이템이 있는지 먼저 확인한다 */}
      <img width={400} src={item?.img}/>
      <div className='card-content-list'>
        <div className='choice-item'>{item?.choice == true ? "베스트셀러" : ""}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        {/* 아이템이 있는지 확인하고, new가 true라면 신제품이라고 표시하고 아니라면 빈 문자열 */}
        <div>{item?.new == true ? "신제품" : ""}</div>
      </div>
    </div>
  )
}

export default ProductCard
