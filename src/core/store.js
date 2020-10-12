import reduxThunk from 'redux-thunk' // Para manejar operaciones asincronas como el fetch
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../redux/reducers';
import initialState from '../redux/initial-state.json';

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxThunk)
);

global.store = store;

export default store;