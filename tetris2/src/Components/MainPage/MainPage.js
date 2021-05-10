
import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios'
import {loginUser, updateUser} from '../../redux/userReducer'

import {
    FaUserAlt,
    // FaTimes,
} from 'react-icons/fa';
import Modal from '../Modal/Modal';
import User from '../User/User';
import {connect} from 'react-redux';
import CommunityBoard from '../CommunityBoard/CommunityBoard';
import {Link} from 'react-router-dom';

import ChatBox from '../CommunityBoard/ChatBox';



import './MainPage.scss'

function MainPage(props) {
    const {user, updateUser, history} = props

    const modalRef = useRef()

    useEffect(() => {
        axios.get('/auth/getUser')
        .then(res => {
            // console.log(res.data);
            updateUser(res.data);
            })
        .catch(err => console.log(err))
    }, [updateUser])

    const logout = () => {
        axios.get('/auth/logout')
        .then(res => {
            history.push('/');
            updateUser({});
            })
        .catch(err => console.log(err))
    }
    
    const openModal = () => {
<<<<<<< HEAD
        // console.log('working????')
        modalRef.current.openModal()
=======
        // console.log('working????');
        modalRef.current.openModal();
>>>>>>> 953af08acdcef68a1a608823e72d950a08245a24
    };

    const checkGuest = () => {
        // console.log('hit')
        console.log(props.user.user_id)
        if(props.user.user_id === 26){
            console.log('this is guest')
        } else {
            openModal()
        }
    }
    
    // console.log(props)
    return(
        <div className="main-section">
            <div className="head-wrap">
                <h1>WELCOME TO <span>TETRIS FRIENDS</span></h1>
                <div className="head-user">
                    <h2 onClick={checkGuest}><FaUserAlt/>{user.username}</h2>
                    <hr/>
                    <h3 onClick={logout}>LOGOUT?</h3>
                </div>
            </div>
            <div className="main-wrap">
                <div className="play-wrap">
                    <Link to={'/tetris'}><button>PLAY</button></Link>
                </div>
                <div className="leaderboard-wrap">
                    <h1>LEADERBOARD</h1>
                </div>
            </div>
            <div className="bottom-wrap">
                <h1 className="chat-box">COMMUNITY BOARD</h1>
            </div>
            <Modal ref={modalRef}>
                <User modalRef={modalRef}/>
            </Modal>
            <div>
                <CommunityBoard/>
            </div>
            <div>
                <CommunityBoard />
                <ChatBox />
            </div>
        </div>
    )
    
}

const mapStateToProps = (stateRedux) => {
    return {
        user: stateRedux.users.user
    }
}

export default connect(mapStateToProps, {loginUser, updateUser})(MainPage);