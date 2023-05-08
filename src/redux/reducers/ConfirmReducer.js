import { createSlice } from '@reduxjs/toolkit';
import confirmReducer from './reducer';

const confirmSlice = createSlice({
  name: 'confirm',
  initialState: {
    isConfirmed: false,
    isNumber: false,
  },
  reducers: {
    setConfirm: (state, action) => {
      state.isConfirmed = action.payload;
    },
    setNumber: (state, action) => {
      state.isNumber = action.payload;
    },
  },
});


export const { setConfirm, setNumber } = confirmSlice.actions;

export default confirmSlice.reducer;

  