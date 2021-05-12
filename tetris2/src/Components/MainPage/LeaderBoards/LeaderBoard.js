import React, { Component } from "react";
import {getUser} from '../../../redux/userReducer';
import {connect} from 'react-redux';
import axios from 'axios'
import './LeaderBoard.scss'


class Leaderboard extends Component {

    constructor (props) {
        super(props)
        this.state = {
            highscores: []
        }
    }

    componentDidMount () {
        axios.get('/api/scores')
        .then((dbres) => {
            console.log(dbres.data)
            this.setState({highscores: dbres.data})
        })
    }

    
    render() {

        console.log(this.state.highscores)
        const scoreMap = this.state.highscores.map((e,i) => {
            console.log(e.username)
            
            return (
                <li>
                    <mark>{e.username}</mark>
                    <small>{e.highest_score}</small>
                </li>
            )
        })

        return (
            <div className='leader-container'>
                <div className='leaderboard'>
                    <h1>
                        <svg class="ico-cup">
                        <use alink="#cup"></use>
                        </svg>
                        LEADERBOARD
                    </h1>
                    <ol>
                        {scoreMap}
                        {/* <li>
                        <mark>Jerry Wood</mark>
                        <small>315</small>
                        </li>
                        <li>
                        <mark>Brandon Barnes</mark>
                        <small>301</small>
                        </li>
                        <li>
                        <mark>Raymond Knight</mark>
                        <small>292</small>
                        </li>
                        <li>
                        <mark>Trevor McCormick</mark>
                        <small>245</small>
                        </li>
                        <li>
                        <mark>Andrew Fox</mark>
                        <small>203</small>
                        </li> */}
                    </ol>
                </div>
                <svg style={{display: 'none'}}>
                    <symbol id="cup" x="0px" y="0px"
                        width="25px" height="26px" viewBox="0 0 25 26" enable-background="new 0 0 25 26">
                        <path fill="#F26856" d="M21.215,1.428c-0.744,0-1.438,0.213-2.024,0.579V0.865c0-0.478-0.394-0.865-0.88-0.865H6.69
                        C6.204,0,5.81,0.387,5.81,0.865v1.142C5.224,1.641,4.53,1.428,3.785,1.428C1.698,1.428,0,3.097,0,5.148
                        C0,7.2,1.698,8.869,3.785,8.869h1.453c0.315,0,0.572,0.252,0.572,0.562c0,0.311-0.257,0.563-0.572,0.563
                        c-0.486,0-0.88,0.388-0.88,0.865c0,0.478,0.395,0.865,0.88,0.865c0.421,0,0.816-0.111,1.158-0.303
                        c0.318,0.865,0.761,1.647,1.318,2.31c0.686,0.814,1.515,1.425,2.433,1.808c-0.04,0.487-0.154,1.349-0.481,2.191
                        c-0.591,1.519-1.564,2.257-2.975,2.257H5.238c-0.486,0-0.88,0.388-0.88,0.865v4.283c0,0.478,0.395,0.865,0.88,0.865h14.525
                        c0.485,0,0.88-0.388,0.88-0.865v-4.283c0-0.478-0.395-0.865-0.88-0.865h-1.452c-1.411,0-2.385-0.738-2.975-2.257
                        c-0.328-0.843-0.441-1.704-0.482-2.191c0.918-0.383,1.748-0.993,2.434-1.808c0.557-0.663,1-1.445,1.318-2.31
                        c0.342,0.192,0.736,0.303,1.157,0.303c0.486,0,0.88-0.387,0.88-0.865c0-0.478-0.394-0.865-0.88-0.865
                        c-0.315,0-0.572-0.252-0.572-0.563c0-0.31,0.257-0.562,0.572-0.562h1.452C23.303,8.869,25,7.2,25,5.148
                        C25,3.097,23.303,1.428,21.215,1.428z M5.238,7.138H3.785c-1.116,0-2.024-0.893-2.024-1.99c0-1.097,0.908-1.99,2.024-1.99
                        c1.117,0,2.025,0.893,2.025,1.99v2.06C5.627,7.163,5.435,7.138,5.238,7.138z M18.883,21.717v2.553H6.118v-2.553H18.883
                        L18.883,21.717z M13.673,18.301c0.248,0.65,0.566,1.214,0.947,1.686h-4.24c0.381-0.472,0.699-1.035,0.947-1.686
                        c0.33-0.865,0.479-1.723,0.545-2.327c0.207,0.021,0.416,0.033,0.627,0.033c0.211,0,0.42-0.013,0.627-0.033
                        C13.195,16.578,13.344,17.436,13.673,18.301z M12.5,14.276c-2.856,0-4.93-2.638-4.93-6.273V1.73h9.859v6.273
                        C17.43,11.638,15.357,14.276,12.5,14.276z M21.215,7.138h-1.452c-0.197,0-0.39,0.024-0.572,0.07v-2.06
                        c0-1.097,0.908-1.99,2.024-1.99c1.117,0,2.025,0.893,2.025,1.99C23.241,6.246,22.333,7.138,21.215,7.138z"/>
                    </symbol>
                </svg>
            </div>
        )
        
    }
    
} 

const mapStateToProps = (stateRedux) => {
    return {
        user: stateRedux.users.user
    }
}

export default connect(mapStateToProps, {getUser})(Leaderboard);

{/* <div className='leader-container'>
    <div className='leader-wrap'>
        <h1>LEADERBOARD</h1>
        <div className='leader-score'>
            {scoreMap}
        </div>
    </div>
</div>  */}

