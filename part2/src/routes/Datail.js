import { useParams } from 'react-router-dom';


function Detail(props){
  let {id} = useParams();
  // .find(), .filter() 사용
  // array 자료 안에서 원하는 항목 찾기
  // find() 콜백함수에 파라미터 넣으면 array에 있던 자료를 뜻한다. (x)
  let findItem = props.shoes.find(function(x){
    return x.id == id;
  })

  console.log(findItem)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={findItem.img} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}

export default Detail;
