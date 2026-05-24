import { combineReducers } from 'redux';

import exampleReducer from './example/reducer';

// Gerencia todos os reducers ()
export default combineReducers({
  example: exampleReducer,
});
