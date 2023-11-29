import { configureStore, createSlice } from '@reduxjs/toolkit'

// useState() 역할
// state 하나를 slice라고 부른다.
let user = createSlice({
  name : 'user',
  initialState : 'Lee'
})

let stock = createSlice({
  name : 'stock',
  initialState : [10, 11, 12]
})

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer
  }
}) 
