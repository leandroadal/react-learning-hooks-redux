import { combineReducers } from 'redux';

import auth from './auth/reducer';

// Gerencia todos os reducers ()
export default combineReducers({
  auth,
});
