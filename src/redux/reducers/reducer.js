import { createAction } from '@reduxjs/toolkit';

// Define the action creator
const setConfirm = createAction('confirm/setConfirm');

// Define the initial state
const initialState = {
  isConfirmed: false,
};

// Define the reducer function
const confirmReducer = (state = initialState, action) => {
  switch (action.type) {
    case setConfirm.type:
      return {
        ...state,
        isConfirmed: action.payload,
      };
    default:
      return state;
  }
};

export default confirmReducer;
