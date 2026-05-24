import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistedReducers from './modules/reduxPersist';

// Inicializa o middleware do Saga
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  // -Todos os reducers da aplicação (mudança de estado)
  persistedReducers(rootReducer),
  // Toda vez que tiver uma actions o apply diz que deve passar pelo redux saga
  applyMiddleware(sagaMiddleware),
);
// Inicia os Sagas
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
