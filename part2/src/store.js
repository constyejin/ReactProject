import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'

// useState() 역할
// state 하나를 slice라고 부른다.

let stock = createSlice({
  name : 'stock',
  initialState : [10, 11, 12]
})

let item = createSlice({
  name : 'item',
  initialState : [
    {id : 0, name : '나이키 코르테즈', count : 2},
    {id : 1, name : '나이키 덩크 로우 프리미엄', count : 10}
  ],
  reducers : {
    increase(state, action){
      state[0].count += action.payload
    }
  }
})

export let {increase} = item.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    item : item.reducer
  }
}) 
