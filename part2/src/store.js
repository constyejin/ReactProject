import { configureStore, createSlice } from '@reduxjs/toolkit'

// useState() 역할
// state 하나를 slice라고 부른다.
let user = createSlice({
  name : 'user',
  initialState : {name : 'Lee', age : 30},

  // Redux state 값 변경
  reducers : {
    changeName(state){
      // return {name : 'Yejin Lee', age : 30}
      // array / object의 경우 직접 수정해도 state 변경됨 (immer.js 도움 -> 알아서 state 복사본 리턴)
      state.name = 'Yejin Lee'
    }
  },
  reducers : {
    plusAge(state){
      state.age += 1
    }
  }
})

export let {changeName, plusAge} = user.actions

let stock = createSlice({
  name : 'stock',
  initialState : [10, 11, 12]
})

let item = createSlice({
  name : 'item',
  initialState : [
    {id : 0, name : '나이키 코르테즈', count : 2},
    {id : 1, name : '나이키 덩크 로우 프리미엄', count : 10}
  ]
})

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    item : item.reducer
  }
}) 
