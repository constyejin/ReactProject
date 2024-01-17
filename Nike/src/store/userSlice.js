import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : {name : 'Lee', age : 30},

  // Redux state 값 변경
  reducers : {
    changeName(state){
      // return {name : 'Yejin Lee', age : 30}
      // array / object의 경우 직접 수정해도 state 변경됨 (immer.js 도움 -> 알아서 state 복사본 리턴)
      state.name = 'Yejin Lee'
    },

    plusAge(state, action){
      // state 변경함수에 파라미터 뚫는 법
      // action : state 변경 함수
      state.age += action.payload
    },
  }
})

export let {changeName, plusAge} = user.actions

export default user;
