const initialState = {
    user: {}
}

const LOGIN_USER = 'LOGIN_USER'
const UPDATE_USER = 'USER_USER'
const GET_USER = 'GET_USER'
const LOGOUT_USER = 'LOGOUT_USER'

export default function reducer(state = initialState, action){
    const{type, payload} = action
    console.log(type, payload)
    switch(type){
        case LOGIN_USER:
            return {...state, user: payload}
        case UPDATE_USER:
            return{...state, user: payload}
        case GET_USER:
            return {...state, user: payload}
        case LOGOUT_USER:
            return {...state, ...payload}
        default:
            return state
    }
}

export function loginUser(payload) {
    console.log(payload)
    return{
        type: LOGIN_USER,
        payload: payload
    }
}

export function updateUser(payload){
    return{
        type: UPDATE_USER,
        payload: payload  
      }
}

export function getUser(payload){
    return{
        type: GET_USER,
        payload: payload
    }
}
