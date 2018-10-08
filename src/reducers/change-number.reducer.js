import { CHANGE_ACTION } from '../actions/change-number.action';

const initState = {
    isIncrease: false
}

export default function changeNumberReducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_ACTION:
      return Object.assign({}, state, {
        isIncrease: action.isIncrease,
      });
    default:
      return state;
  }
}
