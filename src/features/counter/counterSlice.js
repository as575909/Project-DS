// import { createSlice } from '@reduxjs/toolkit'



// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: (state) => {
      
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     emptyCart: (state) =>{
//         state.value = 0
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const { increment, decrement, emptyCart, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer





import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState:[],
    reducers:{
        increment: (state,action) => {
            state.push(action.payload)   
        },
    },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;