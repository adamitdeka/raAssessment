import { ADD_PRODUCTS_DATA, REQ_PRODUCTS_DATA } from "../action/actionConstant";

const initialState = {
  productsLoaded: false,
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCTS_DATA:
      return {...state, products:{...action.payload} };
    default:
      return state;
  }
}
