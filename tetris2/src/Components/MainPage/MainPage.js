import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios'
import {loginUser, updateUser} from '../../redux/userReducer'
import Leaderboard from './LeaderBoards/LeaderBoard';
import {RiLogoutBoxFill} from 'react-icons/ri'
import {AiFillRead, AiTwotoneMail} from 'react-icons/ai'
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
        // console.log('working????');
        modalRef.current.openModal();
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
                <h1>TETRIS FRIENDS</h1>
                <hr/>
                <div className="head-user">
                    <h2 onClick={checkGuest} className='username header-link'><FaUserAlt/><span className='username'>{user.username}</span></h2>
                    <div className='verticle-line'></div>
                    <h2 onClick={logout} className='header-link'><RiLogoutBoxFill/><span>Logout</span></h2>
                    <Link to='/about' className='head-link header-link'><AiFillRead/><span>About</span></Link>
                    <Link to='/contact' className='head-link header-link'><AiTwotoneMail/><span>Contact</span></Link>
                </div>
            </div>
            <div className="main-wrap">
                <div className="play-wrap">
                    <Link to={'/tetris'}><button>PLAY</button></Link>
                    <Link to={'/HardModetetris'}><button>Hard Mode</button></Link>
                </div>
                <div className="leaderboard-wrap">
                    <Leaderboard/>
                </div>
            </div>
            <div className="bottom-wrap">
                <h1 className="chat-box">Community Chat</h1>
            </div>
            <Modal ref={modalRef}>
                <User modalRef={modalRef}/>
            </Modal>
            <div>
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