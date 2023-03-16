import { combineReducers } from 'redux';
import counterReducer from '../features/counter/counterSlice'
import MyCartReducer from '../features/counter/MyCartSlice';
import LoginReducer from './LoginReducer';


export default combineReducers({
    counter: counterReducer,
    cart: MyCartReducer,
    user: LoginReducer,
  })