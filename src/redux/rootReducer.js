import { combineReducers } from 'redux';
import counterReducer from './reducers/counterSlice'
import MyCartReducer from './reducers/MyCartSlice';
import LoginReducer from './reducers/LoginReducer';


export default combineReducers({
    counter: counterReducer,
    cart: MyCartReducer,
    user: LoginReducer,
  })