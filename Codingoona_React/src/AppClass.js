import React, { Component } from 'react'
import BoxClass from './component/BoxClass';

export default class AppClass extends Component {
  // constructor : 컴포넌트가 실행되자 마자 호출되는 함수 (Lifecycle function중 하나)
  constructor(props) {
    super(props)
    this.state = {
      counter : 0,
      value : 0,
    }
  };

  increase = () => {
    this.setState({
      counter : this.state.counter + 1,
      value : this.state.value + 1,
    })
  };

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.increase}>Click!</button>
        <BoxClass num={this.state.value}/>
      </div>
    )
  }
}
