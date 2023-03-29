import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   data: []
}

const loginSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      adduser(state, action) {
         return {
            ...state,
            data: [...state.data, action.payload],
         };
      }
   }
})

export const { adduser } = loginSlice.actions;
export default loginSlice.reducer;