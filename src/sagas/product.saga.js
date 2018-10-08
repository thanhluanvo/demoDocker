import { call, put, takeLatest, all } from "redux-saga/effects";
import { delay } from "redux-saga";
import { LOADING_PRODUCT, LOADING_PRODUCT_FULFILLED, LOADING_PRODUCT_FAILED } from '../actions/product.action';
import MockProducts from '../helpers/mock-data/productData';

function* loadProducts() {
  // TODO: call api later
  try {


    // mock data
    const _products = MockProducts;

    yield put({ type: LOADING_PRODUCT_FULFILLED, products: _products });
  } catch (e) {
    yield put({ type: LOADING_PRODUCT_FAILED, error: "AppConfig.generalError" });
  }
}


export default function* watchProductSagasAsync() {
  yield all([
    takeLatest(LOADING_PRODUCT, loadProducts)
  ]);
}