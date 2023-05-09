// export const ADD_TO_CART="ADD_TO_CART"
// export const REMOVE_FROM_CART="REMOVE_FROM_CART"
// export const EMPTY_CART="EMPTY_CART"
// export const PRODUCT_LIST="PRODUCT_LIST"
// export const SET_PRODUCT_LIST="SET_PRODUCT_LIST"


export const USER_LIST = 'USER_LIST';
export const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS';
export const USER_LIST_ERROR = 'USER_LIST_ERROR';

export const userList = () => ({
  type: USER_LIST,
});

export const userListSuccess = (userList) => ({
  type: USER_LIST_SUCCESS,
  payload: userList,
});

export const userListError = (error) => ({
  type: USER_LIST_ERROR,
  payload: error,
});
