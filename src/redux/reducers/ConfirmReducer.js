import { createSlice } from '@reduxjs/toolkit';
import confirmReducer from './reducer';

const confirmSlice = createSlice({
  name: 'confirm',
  initialState: {
    isConfirmed: false,
  },
  reducers: {
    setConfirm: (state, action) => {
      state.isConfirmed = action.payload;
    },
    clearConfirm: (state) => null,
  },
});


export const { setConfirm, clearConfirm } = confirmSlice.actions;

export default confirmSlice.reducer;

  