import store from './store';
import axios from 'axios';
import { loginUser } from './userReducer';

export function loginUserDispatch(username, password) {
    let = promise = axios.post('/api/whateversamusesforaxiospost', {username, passowrd}).then(res => res.data)
    store.dispatch(loginUser(promise))
}