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