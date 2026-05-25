import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'API-ESCOLA',
      storage,
      whitelist: ['auth'], // a chave que tem no rootReducer
    },
    reducers,
  );

  return persistedReducers;
};
