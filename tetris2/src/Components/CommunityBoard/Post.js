import { Component } from 'react'
import axios from 'axios';

class Post extends Component {

    constructor(props){
        super(props);
        this.state ={
            title: '',
            content:''
        }
        this.submit =this.submit.bind(this);
    }

    submit(){
    //     axios.post('/api/post', this.state)
    //   .then(() => this.props.history.push())
    //   .catch((err) => console.log(err))
    }



    render () {
        return (
            <div className='PostForm'>
                <h2 className='title'>New Post</h2>
                <div className='Post-Form-Main'>
                    <div className='Post-Form-Title-input-box'>
                        <p>Title:</p>
                        <input value={this.state.title} onChange={e => this.setState({ title: e.target.value })} />
                    </div>
                    <div className='Post-Form-Content-text-box'>
                        <p>Content:</p>
                        <textarea value={this.state.content} onChange={e => this.setState({ content: e.target.value })} />
                    </div>
                </div>
                <button onClick={this.submit} className='submit-button'>Submit Post</button>
            </div>
        )
    }
}

export default Post