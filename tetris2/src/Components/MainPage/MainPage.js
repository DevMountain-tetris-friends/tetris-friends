import React, {useEffect} from 'react';
import axios from 'axios'
import {loginUser, updateUser} from '../../redux/userReducer'
import {connect} from 'react-redux'

function MainPage(props) {
    const {user, updateUser, history} = props

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
          updateUser(null)
          })
          .catch(err => console.log(err))
      }
    
    console.log(props)
    return(
        <div className="main-section">
            <div className="head-wrap">
                <h1>Welcome {user.username}</h1>
                <h3 onClick={logout}>LOGOUT?</h3>
            </div>
            <div className="play-wrap">
                <button>PLAY</button> 
            </div>
            <div>
                <h1>LEADERBOARD</h1>
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