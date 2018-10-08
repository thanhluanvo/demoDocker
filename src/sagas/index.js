import { all, fork } from "redux-saga/effects";
import watchProductSagasAsync from './product.saga';

export default function* sagas() {
  yield all([
    fork(watchProductSagasAsync)
  ]);
}