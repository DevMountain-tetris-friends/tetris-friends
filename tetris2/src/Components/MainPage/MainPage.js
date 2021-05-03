import React, {useEffect, useRef} from 'react';
import axios from 'axios'
import {loginUser, updateUser} from '../../redux/userReducer'
import {
    FaUserAlt,
    // FaTimes,
} from 'react-icons/fa'
import Modal from '../Modal/Modal'
import User from '../User/User'
import {connect} from 'react-redux'
import CommunityBoard from '../CommunityBoard/CommunityBoard'

import './MainPage.scss'

function MainPage(props) {
    const {user, updateUser, history} = props

    const modalRef = useRef()

    useEffect(() => {
        axios.get('/auth/getUser')
        .then(res => {
            console.log(res.data)
            updateUser(res.data)
            })
        .catch(err => console.log(err))
    }, [updateUser])

    const logout = () => {
        axios.get('/auth/logout')
        .then(res => {
            history.push('/')
            updateUser({})
            })
        .catch(err => console.log(err))
    }
    
    const openModal = () => {
        console.log('working????')
        modalRef.current.openModal()
    };
    
    console.log(props)
    return(
        <div className="main-section">
            <div className="head-wrap">
                <h1>WELCOME TO <span>TETRIS FRIENDS</span></h1>
                <div className="head-user">
                    <h2 onClick={openModal}><FaUserAlt/>{user.username}</h2>
                    <hr/>
                    <h3 onClick={logout}>LOGOUT?</h3>
                </div>
            </div>
            <div className="main-wrap">
                <div className="play-wrap">
                    <button>PLAY</button> 
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
        </div>
    )
    
}

const mapStateToProps = (stateRedux) => {
    return {
        user: stateRedux.users.user
    }
}

export default connect(mapStateToProps, {loginUser, updateUser})(MainPage);