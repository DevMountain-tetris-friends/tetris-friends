import store from './store';
import axios from 'axios';
import { loginUser } from './userReducer';

export function loginUserDispatch(username, password) {
    let promise = axios.post('/auth/login', {username, password}).then(res => res.data)
    store.dispatch(loginUser(promise))
}

