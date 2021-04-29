import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {loginUser} from '../../redux/userReducer';
import {connect} from 'react-redux';

import {Link, useHistory} from 'react-router-dom';

import Register from './Register';

function Login(props) {
    const [usernameInputText, setUsernameInputText] = useState('');
    const [passwordInputText, setPasswordInputText] = useState('');
    const [register, setRegister] = useState(false);
    const {user} = props;
    const {push} = props.history;

    useEffect(() => {
        if(user){
            history.push('/')
        }
    }, [user, push]);

    const history = useHistory()
    
    const loginFunction = () => {
        
        axios.post('/auth/login', {
            username: usernameInputText, 
            password: passwordInputText,

        })
        .then(res => {
            console.log(res.data)
            history.push('/mainpage')
            props.loginUser(res.data)
        })
        .catch(err => console.log(err))
        
    }

    const guest = () => {
        axios.post('/auth/login', {
            username: 'Guest', 
            password: 'Guest',

        })
        .then(res => {
            console.log(res.data)
            history.push('/mainpage')
            props.loginUser(res.data)
            
        })
        .catch(err => console.log(err))

        
    }

    return(
        <div>
            <header>Header</header>
            
            {register ? <Register setRegister={setRegister}/> :

            <div>
                <p> username </p>
                <input className='input-box' value={usernameInputText} type='text' onChange={e => setUsernameInputText(e.target.value)}/>
                <p> password </p>
                <input className='input-box' value={passwordInputText} type='password' onChange={ e => setPasswordInputText(e.target.value)}/>
            </div>
            }

            <button onClick={loginFunction}>Login</button>
            <button onClick={() => setRegister(true)}>Register</button>
            <button onClick={guest}>Guest</button>
        </div>
    )
    
}
const mapStateToProps = (stateRedux) => {
    return {
        user: stateRedux.users.user
    }
}

export default connect(mapStateToProps,{loginUser})(Login);
