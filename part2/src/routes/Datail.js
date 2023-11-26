import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// let BlackBox = styled.div`
//   background : black;
//   padding : 40px;
// `

// let Btn = styled.button`
// color : ${props => props.bg == 'blue' ? 'white' : 'black'};
//   background : ${props => props.bg};
//   border : none;
//   border-radius : 8px;
//   padding : 20px;
// `

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
      {/* <BlackBox>
        <Btn bg="blue">Blue Button</Btn>
        <Btn bg="yellow">Yellow Button</Btn>
      </BlackBox> */}

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
