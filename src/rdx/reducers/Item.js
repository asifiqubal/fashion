import {categoryList, ItemList} from '../../component/common/data';

/**
 * @copyright   Asif Iqubal
 */
export default (
  state = {
    items: ItemList,
    categories: categoryList,
  },
  action,
) => {
  switch (action.type) {
    case 'item:set-item-list':
      return {...state, items: action.payload};
    default:
      return state;
  }
};
