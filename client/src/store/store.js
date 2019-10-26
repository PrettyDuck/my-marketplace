import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './effects'
import logger from 'redux-logger'

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(logger,sagaMiddleware))
)
sagaMiddleware.run(rootSaga);
export default store;