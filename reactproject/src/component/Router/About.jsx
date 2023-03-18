import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet, Link } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate('/')

  // useNavigate는 함수를 리턴한다.
  // 함수의 파라미터 안에 내가 가고싶은 곳의 주소를 작성한다.
  // 어떤 함수 안에서 써야한다 할 대는 useNavigate를 사용하는 게 좋다
  // 함수 호출할 거 없이 바로 이동하면 될 경우 => Link 
  // const goToHomepage = () => {
  //   navigate('/')
  // }

  return (
    <div>
      <h1>About Page!</h1>
      <Outlet/>
      <button onClick={()=>{navigate('/about')}}>About</button>
      <button onClick={()=>{navigate('/about/member')}}>member</button>
      <button onClick={()=>{navigate('/about/location')}}>location</button>
      <button onClick={()=>{navigate('/')}}>Home으로 이동</button>
      {/* <button onClick={goToHomepage}>Home으로 이동</button> */}
    </div>
  )
}

export default About
