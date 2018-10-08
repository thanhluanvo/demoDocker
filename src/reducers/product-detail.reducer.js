import { TOGGLE_PRODUCT_DETAIL } from '../actions/product.action';

const initState = {
    toggleProductDetail: false,
    product: null
}

export default function productDetailReducer(state = initState, action) {
    switch (action.type) {
        case TOGGLE_PRODUCT_DETAIL:
            return Object.assign({}, state, {
                product: action.product,
                toggleProductDetail: action.toggleProductDetail
            });
        default:
            return state;
    }
}
