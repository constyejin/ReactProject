import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = ({setUserLogin}) => {
  const navigate = useNavigate()

  const loginUser = (e) => {
    // 콘솔이 잠깐 찍혔다가 사라지는 이유
    // : 페이지를 새로고침 하기 때문!
    // 해결방법 : preventDefault로 form이 새로고침 하는걸 막아준다.
    e.preventDefault();
    console.log("loginUser")

    setUserLogin(true);
    navigate('/')
  }

  return (
    <Container style={{width: "480px", marginTop: "20px"}}>
      {/* onSubmit : type이 submit일 경우 onClick이 아니라 onSubmit을 사용!*/}
      {/* form 자체에서 주는 이벤트를 파라미터 값으로 보내줌 */}
      <Form onSubmit={(e) => loginUser(e)}>
        <img style={{width: "50px", margin: "20px 0"}} src="https://pngimg.com/d/nike_PNG11.png" alt="logo" />
        <h3>가입 또는 로그인을 위해 이메일을 입력하세요.</h3>
        <div>
          <span>대한민국</span>
          <span style={{color : "gray", marginLeft : "10px", textDecoration: "underline", cursor : "pointer"}}>변경</span>
        </div>
        <input style={{width: "100%", margin : "30px 0", padding : "12px", borderRadius : "5px", outline : "none", border : "1px solid #000"}} type="text" placeholder='이메일'/>
        <p style={{width : "380px", color : "gray"}}>계속 진행하면 나이키의 <span style={{textDecoration : "underline"}}>개인 정보 처리 방침</span> 및 <span style={{textDecoration : "underline"}}>이용약관</span>에 동의하게 됩니다.</p>
        <div style={{display : "flex", justifyContent : "flex-end"}}>
          <button type='submit' style={{width : "80px", backgroundColor : "#000", color : "#fff", borderRadius : "40px", padding : "10px"}}>계속</button>
        </div>
      </Form>
    </Container>
  )
}

export default Login
