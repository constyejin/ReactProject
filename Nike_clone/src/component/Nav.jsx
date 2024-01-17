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

  // 이 event에 있는 키가 "Enter" 라면
  const search = (event) => {
    // console.log("Key Press")

    if(event.key === "Enter") {
      // 입력한 검색어를 읽어와서 url을 바꿔준다.
      console.log("Enter!!!");

      // react에서 input안에 있는 값을 읽어오는 방법
      let keyword = event.target.value;
      console.log(keyword);

      // url을 바꿔준다 => navigate 사용
      // 파라미터 값이 아니라 쿼리 값이 필요!
      // 추가적인 조건에 대해서는 쿼리로 붙인다
      // ?q=검색어
      navigate(`/?q=${keyword}`)

      // 이제 api에서 이 키워드를 가진게 있다면 화면에 보여준다.
    }
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
            <input type="text" placeholder='검색' onKeyPress={(event) => search(event)}/>
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
