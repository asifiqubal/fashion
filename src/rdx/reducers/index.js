/**
 * @copyright   Asif Iqubal
 */

import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Auth from './Auth';
/**
 */
const rdx_reduers = combineReducers({
  _auth: Auth,
});

/**
 */
const persist_cfg = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['_auth'],
};

/**
 */
export default persistReducer(persist_cfg, rdx_reduers);
