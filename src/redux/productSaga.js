import { takeEvery, put } from 'redux-saga/effects';
import { Product_List, Set_Product_List } from "./constant";


function* getProducts() {
    let data = yield fetch('https://fakestoreapi.com/carts');
    data = yield data.json();
    yield put({ type: Set_Product_List })
}


function* productSaga() {
    yield takeEvery(Product_List, getProducts)
}

export default productSaga;