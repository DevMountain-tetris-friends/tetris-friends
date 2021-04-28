const initialState = {
    first_name: "",
    last_name: "",
    username: "",
    highest_score: 0,
    //Part of scoreboard table
    id_score: 0
}

const LOGIN_USER = 'LOGIN_USER'
const GET_USER = 'GET_USER'
const LOGOUT_USER = 'LOGOUT_USER'

export default function reducer(state = initialState, action){
    const{type, payload} = action
    switch(type){
        case LOGIN_USER:
            return {...state, user: payload}
        case GET_USER:
            return {...state, user: payload}
        case LOGOUT_USER:
            return {...state, ...payload}
        default:
            return state
    }
}

export function loginUser(payload) {
    return{
        type: LOGIN_USER,
        payload: payload
    }
}

