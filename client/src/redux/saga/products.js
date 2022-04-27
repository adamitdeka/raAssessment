import { REQ_PRODUCTS_DATA } from "../action/actionConstant";
import {addProducts} from "../action"
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import ProductService from '../../services/products';

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchProducts() {
    const productApi = new ProductService();
   try {
    let products = yield productApi.getProducts();
    yield put(addProducts(products.data.data)); 
   } catch (e) {
      console.log(e);
   }
}

// Allows concurrent fetches of user
export default function* productsSaga() {
  yield takeEvery(REQ_PRODUCTS_DATA, fetchProducts);
}