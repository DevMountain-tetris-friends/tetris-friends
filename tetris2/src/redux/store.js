import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import userReducer from './userReducer';


const rootReducer = combineReducers ({
    users: userReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
//redux-promise-middleware fires once completed
