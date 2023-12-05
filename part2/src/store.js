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
    {id : 0, title : '나이키 코르테즈', count : 2},
    {id : 1, title : '나이키 덩크 로우 프리미엄', count : 10}
  ],
  reducers : {
    increase(state, action){
      let num = state.findIndex((a) => { return a.id === action.payload })
      state[num].count++
      // state[action.payload].count += 1
    },
    
    addItem(state, action){
      state.push(action.payload)
    }
  }
})

export let {increase, addItem} = item.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    item : item.reducer
  }
}) 
