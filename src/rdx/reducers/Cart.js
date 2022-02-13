/**
 * @copyright   Asif Iqubal
 */

const INITIALSTATE = {
  items: [],
  subtotal: 0.0,
  discount: 0.0,
  totalItem: 0,
};
export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case 'cart:update':
      return {...state, items: action.payload};
    case 'cart:update-subtotal':
      return {...state, subtotal: action.payload};
    case 'cart:update-total-item':
      return {...state, totalItem: action.payload};
    case 'cart:init':
      return {...INITIALSTATE};
    default:
      return state;
  }
};
