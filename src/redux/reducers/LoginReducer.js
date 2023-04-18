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
      },
      ResetPassword(state, action) {
         console.log("pass ... reset", state.data.map((item) => {
            if (item.Email === action.payload.Email) {
               return action.payload;
            }
            return item
         }),)
         return {
            ...state
         }
         // return {
         //    ...state,
         //    data: state.data.map((item) => {
         //       if (item.Password === action.payload.newPass) {
         //          return action.payload;
         //       }
         //    }),
         // };
      }
   }
})

export const { adduser, ResetPassword } = loginSlice.actions;
export default loginSlice.reducer;