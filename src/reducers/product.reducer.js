import { LOADING_PRODUCT, LOADING_PRODUCT_FULFILLED, LOADING_PRODUCT_FAILED } from '../actions/product.action';

const initState = {
    loading: false,
    fulfilled: false,
    failed: false,
    products: []
}

export default function productReducer(state = initState, action) {
    switch (action.type) {
        case LOADING_PRODUCT:
            return Object.assign({}, state, {
                loading: true,
                fulfilled: false,
                failed: false,
            });
        case LOADING_PRODUCT_FULFILLED:
            return Object.assign({}, state, {
                loading: false,
                fulfilled: true,
                failed: false,
                products: action.products
            });
        case LOADING_PRODUCT_FAILED:
            return Object.assign({}, state, {
                loading: false,
                fulfilled: false,
                failed: true,
                products: []
            });
        default:
            return state;
    }
}
