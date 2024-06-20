import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './store/userSlice.js';

let cart = createSlice({
  name: 'cart',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers: {
    increase(state, action){
      let a = state.findIndex((state)=> state.id == action.payload);
      state[a].count += 1
    },
    addItem(state, action){
      let num = state.findIndex((state)=>{return state.id === action.payload.id})
      if(num > -1){
        state[num].count++
        window.alert('중복된 상품입니다. 수량이 추가됩니다')
      }else{
        state.push(action.payload)
      }
    }
  }
})
export let { increase, addItem } = cart.actions;
export default configureStore({
  reducer: {
    cart: cart.reducer
  }
}) 