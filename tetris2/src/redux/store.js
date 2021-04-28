import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import userReducer from './userReducer';
import scoreboardReducer from './scoreboardReducer';

const rootReducer = combineReducers ({
    users: userReducer,
    scoreBoard: scoreboardReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
