/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {loginUser} from '../../redux/userReducer';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Register from '../Register/Register';
import videoBg from '../../images/video-Bg.mp4'
import './Login.scss'

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
        // .catch(err => console.log(err))

        
    }
    console.log(props)
    return(
        <div className="login-container">   
            <video autoPlay loop="true" muted>
                <source src={videoBg} type="video/mp4"/>
            </video>         
            {register ?
            <>
            <h1 className="login-h1">
                <div>
                    T
                    <span className="h1-yellow">E</span>
                    <span className="h1-blue">T</span>
                    R
                    <span className="h1-red">I</span>
                    <span className="h1-blue h1-space">S</span>
                </div>
                <div>
                    F
                    <span className="h1-red">R</span>
                    <span className="h1-yellow">I</span>
                    E
                    <span className="h1-red">N</span>
                    <span className="h1-blue">D</span>
                    S
                </div>
            </h1>
            <Register setRegister={setRegister}/> 
            </>
            :
            <div className="login-wrap">
                <h1 className="login-h1">
                    <div>
                        T
                        <span className="h1-yellow">E</span>
                        <span className="h1-blue">T</span>
                        R
                        <span className="h1-red">I</span>
                        <span className="h1-blue h1-space">S</span>
                        <div>
                    </div>
                        F
                        <span className="h1-red">R</span>
                        <span className="h1-yellow">I</span>
                        E
                        <span className="h1-red">N</span>
                        <span className="h1-blue">D</span>
                        S
                    </div>
                </h1>
                <div className="login-input">
                    <input placeholder="username..." className='input-box' value={usernameInputText} type='text' onChange={e => setUsernameInputText(e.target.value)}/>
                    <input placeholder="password..." className='input-box' value={passwordInputText} type='password' onChange={ e => setPasswordInputText(e.target.value)}/>
                </div>
                <div className="login-buttons">
                    <button onClick={loginFunction}>Login</button>
                    <button onClick={() => setRegister(true)}>Register</button>
                    <button onClick={guest}>Guest</button>
                </div>  
            </div>
            }
        </div>
    )
    
}
const mapStateToProps = (stateRedux) => {
    return {
        user: stateRedux.users.user
    }
}

export default connect(mapStateToProps,{loginUser})(Login);
