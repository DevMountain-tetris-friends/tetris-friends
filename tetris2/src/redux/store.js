import { createStore, applyMiddleware, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware';

import userReducer from './userReducer';


const rootReducer = combineReducers ({
    users: userReducer
})

export default createStore(rootReducer,composeWithDevTools(applyMiddleware(promiseMiddleware)));
//redux-promise-middleware fires once completed
