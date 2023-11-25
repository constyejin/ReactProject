function Detail(){
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/88c9e86c-58d5-4cfc-b1ee-e18213a5ef2e/%EC%BD%94%EB%A5%B4%ED%85%8C%EC%A6%88-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-ak3bBZzW.png" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>139000</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}

export default Detail;
