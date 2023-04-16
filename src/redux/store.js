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
import rootReducer from './rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


// export default () => {
//   let store = configureStore({
//     reducer: persistedReducer, 

//  });
//   let persistor = persistStore(store);
//   return { store, persistor };
// };



// const store = configureStore(
//   {
//      reducer: persistedReducer,
//   }
// )

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

let persistor = persistStore(store);


export {store, persistor};