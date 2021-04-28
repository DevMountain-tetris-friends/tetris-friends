import React, { useState } from 'react';
import {loginUserDispatch} from '../../redux/userService';
import { useSelector } from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import Register from './Register';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState(false);

    function loginFunction() {
        loginUserDispatch(username, password);
    }

    

    console.log('got here');
    

    return(
        <div>
            <header>Header</header>
            
            {register ? <Register /> :

            <div>
                <p> username </p>
                <input className='input-box' value={username} type='text' onChange={e => setUsername(e.target.value)}/>
                <p> password </p>
                <input className='input-box' value={password} type='password' onChange={ e => setPassword(e.target.value)}/>
            </div>
            }

            <button onClick={loginFunction}>Login</button>
            <button onClick={() => setRegister(true)}>Register</button>
            <button>Guest</button>
        </div>
    )
    
}
export default Login;