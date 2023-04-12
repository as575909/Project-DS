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
        increaseQty: (state, action) => {
            let myIndex = -1;
            state.map((item, index) => {
                if (item.id == action.payload) {
                    myIndex = index;
                }
            });
            if (myIndex == -1) {

            } else {
                state[myIndex].qty = state[myIndex].qty + 1;
            }
        },
    },
});

export const { increment, increaseQty } = counterSlice.actions;

export default counterSlice.reducer;