import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const loginList = ['매장찾기', '고객센터', '가입하기', '로그인']
  const menuList = ['New Releases', 'Men', 'Women', 'Kids', 'Sale', 'SNKRS', '나이키 앱'];

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login")
  }

  const search = () => {
    console.log("Key Press")
  }

  return (
    <div>
      <div className='login'>
        <ul className='login-list'>
          {
            loginList.map((item, i)=>{
              if (i === loginList.length - 1) {
                return <li className='login-item' key={i} onClick={goToLogin}>{item}</li>
              } else {
                return <li className='login-item' key={i}>{item}</li>
              }
            })
          }
        </ul>
      </div>

      <div className='nav'>
        <img width={70} src="https://pngimg.com/d/nike_PNG11.png" alt="logo" />
        <ul className='gnb-list'>
          {
            menuList.map((menu, i)=>{
              return <li className='gnb-item' key={i}>{menu}</li>
            })
          }
        </ul>
        <div className='icon-list'>
          <div className='search-box'>
            <FontAwesomeIcon className='ic-search' icon={faMagnifyingGlass} />
            <input type="text" placeholder='검색' onKeyPress={search}/>
          </div>
          <div>
            <FontAwesomeIcon className='icon' icon={faHeart} />
            <FontAwesomeIcon className='icon' icon={faCartShopping} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
