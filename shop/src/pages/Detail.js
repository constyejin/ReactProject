import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let Btn = styled.button`
  // 외부 라이브러리 사용법 (props 사용)
  background-color: ${props => props.bg};
  color : white;
  padding : 10px;
  border : none;
  border-radius : 5px;
`

let Box = styled.div`
  width : 100px;
  height: 200px;
  background-color : #000;
`

let NewBtn = styled(Btn)`
  margin : 10px;
  border: 2px solid ${props => props.bg == 'black' ? '#fff' : 'red'}
`

function Detail(props) {
  let {id} = useParams();
  console.log(id);
  let fintItem = props.shoes.find(function(x){
    return x.id == id
  })

  return (
    <div className="container">
      <Box>
       <Btn bg="blue">Button</Btn>
       <Btn bg="red">Button</Btn>
       <Btn bg="green">Button</Btn>
       <NewBtn bg="black">BTN</NewBtn>
      </Box>
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes"+ (props.shoes[id].id+1) +".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}won</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}

export default Detail;
