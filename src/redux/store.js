// // import {createStore} from 'redux'
// import {configureStore} from '@reduxjs/toolkit'
// import rootReducer from './rootReducer';
// import productSaga from './productSaga'
// import createSagaMiddleware from 'redux-saga';

// // const store = createStore(rootReducer);
// const sagaMiddleware = createSagaMiddleware();
// const store  = configureStore({
//     reducer:rootReducer,
//     middleware:()=>[sagaMiddleware]
// });

// sagaMiddleware.run(productSaga);

// export default store;

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import MyCartReducer from '../features/counter/MyCartSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: MyCartReducer,
  },
})