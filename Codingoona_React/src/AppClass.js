import React, { Component } from 'react'
import BoxClass from './component/BoxClass';

export default class AppClass extends Component {
  // constructor : 컴포넌트가 실행되자 마자 호출되는 함수 (Lifecycle function중 하나)
  constructor(props) {
    // 1. constructor - state 생성
    super(props)
    this.state = {
      counter : 0,
      value : 0,
    }
    console.log("constructor")
  };

  increase = () => {
    this.setState({
      counter : this.state.counter + 1,
      value : this.state.value + 1,
    })
    console.log("increase function", this.state)
  };

  componentDidMount(){
    // 3. componentDidMount - API Call
    console.log("componentDidMount")
  }

  // state가 update된 후에 해야하는 작업 => componentDidUpdate
  componentDidUpdate(){
    console.log("componentDidUpdate", this.state)
  }

  render() {
    // 2. render - UI 그리기
    console.log("render")
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.increase}>Click!</button>
        {
         this.state.counter < 3 && <BoxClass num={this.state.value}/>
        }
      </div>
    )
  }
}
