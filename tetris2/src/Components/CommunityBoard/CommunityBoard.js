import { Component } from 'react'
// import axios from 'axios'
// import ChatBox from './ChatBox'
import DisplayPost from './DisplayPost'



class CommunityBoard extends Component {

    constructor () {
        super()
        this.state = {
            id: '',
            username: '',
            postTitle: '',
            postContent: ''
        }
    }

    componentDidMount () {
        // console.log('this is the Community Board')
    }
    render () {
        return (
            <div>
                
                
                <DisplayPost />
            </div>
        );
    }
}

export default CommunityBoard

