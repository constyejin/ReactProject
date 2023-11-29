import { configureStore, createSlice } from '@reduxjs/toolkit'

// useState() 역할
// state 하나를 slice라고 부른다.
let user = createSlice({
  name : 'user',
  initialState : 'Lee'
})

export default configureStore({
  reducer: { 
    user : user.reducer
  }
}) 
