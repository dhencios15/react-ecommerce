import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import derectoryReducer from './directory/directoryReducer';
import shopReducer from './shop/shopReducer';

const persisConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: derectoryReducer,
  shop: shopReducer,
});

export default persistReducer(persisConfig, rootReducer);
