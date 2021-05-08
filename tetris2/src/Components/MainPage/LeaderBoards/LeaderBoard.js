import React, { Component } from "react";
import {getUser} from '../../../redux/userReducer';
import {connect} from 'react-redux';
import axios from 'axios'


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
            

            return <div>
                <h3>
                    {e.username}: <span>{e.highest_score}</span>
                </h3>
            </div>
        })

        return (
            <div>
                {scoreMap}
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