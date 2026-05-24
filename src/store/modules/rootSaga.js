import { all } from 'redux-saga/effects';

import example from './example/sagas';

// Gerencia as sagas (avisa ao redux quando mudar o estado)
export default function* rootSaga() {
  // array com as sagas
  return yield all([example]);
}
