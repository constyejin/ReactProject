import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <main>
      <Ipsum layout='background' name='front-txt' front='front-content'/>
      <Ipsum layout='top' name='second-txt'/>
    </main>
  )
}

function Ipsum(props) {
  const showBtn = props.name === 'front-txt' ? true : false;

  return (
    <section className={props.layout}>
      <div className={props.name}>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sint aperiam tempora ratione sunt beatae alias nulla<br/>
          unde expedita suscipit quisquam natus dolores aliquam, placeat ea iusto, nesciunt, incidunt minima.
        </p>

        {/* 컴포넌트가 렌더링될 때 마다 실행된다. 이벤트 핸들러에 함수로 전달해야 
        버튼이 클릭될 때만 alert가 실행된다 */}

        {/* 함수를 전달하면 이벤트가 발생했을 때만 함수가 실행된다. 
        이벤트 핸들러에 함수가 아닌 표현식이나 값이 직접 전달되면 컴포넌트가 
        렌더링될 때마다 해당 값이 실행된다. 
        
        예를 들어, onClick={alert('안녕하세요!')}와 같이 직접 alert를 실행하면 컴포넌트가 렌더링될 때마다 alert가 실행되므로 원하지 않는 결과가 발생한다. */}

        {/* showBtn이 true일 때만 <button> 요소를 렌더링하게 한다 
        showBtn 변수값을 조작해서 버튼이 보이거나 보이지 않게 만든다 */}

        {/* && 연산자는 좌항과 우항의 값을 모두 확인한 후, 
        둘 다 true일 경우에만 true를 반환한다. 좌항이 false일 경우, 
        우항은 평가하지 않고 바로 false를 반환한다. */}
        {showBtn && <button className="front-btn" type="button" onClick={() => alert('안녕하세요!')}>버튼</button>}


      </div>
    </section>
  )
}



export default Main
