/**
 * @copyright   Asif Iqubal
 */

import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Auth from './Auth';
import Item from './Item';
import Cart from './Cart';
/**
 */
const rdx_reduers = combineReducers({
  _auth: Auth,
  _data: Item,
  _cart: Cart,
});

/**
 */
const persist_cfg = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

/**
 */
export default persistReducer(persist_cfg, rdx_reduers);
