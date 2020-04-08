import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import userReducer from './user/user.reducer';


const store = createStore(userReducer, composeWithDevTools(applyMiddleware(logger)) );

export default store;
