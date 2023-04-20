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
      // ResetPassword(state, action) {
      //    console.log("pass ... reset", state.data.map((item) => {
      //       if (item.Email === action.payload.Email) {
      //          return action.payload;
      //       }
      //       return item
      //    }),)
      //    return {
      //       ...state
      //    }
      // }
      updatePassword: (state, action) => {
         const { phoneNumber, password } = action.payload;
         const userIndex = state.data.findIndex((user) => user.Number === phoneNumber);
         if (userIndex !== -1) {
           state.data[userIndex].Password = password;
         }
       },

   }
})

export const { adduser, updatePassword } = loginSlice.actions;
export default loginSlice.reducer;