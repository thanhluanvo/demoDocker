import { combineReducers } from 'redux';
import changeNumberReducer from './change-number.reducer';
import productReducer from './product.reducer';
import productDetailReducer from './product-detail.reducer';

export default combineReducers({
    changeNumber: changeNumberReducer,
    product: productReducer,
    productDetail: productDetailReducer
});