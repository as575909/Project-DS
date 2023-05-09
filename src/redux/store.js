import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import SagaData from './saga';
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

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(SagaData);
let persistor = persistStore(store);


export {store, persistor};