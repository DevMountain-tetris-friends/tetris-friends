import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../redux/userReducer'
import io from 'socket.io-client';

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      message: "",
      username: 'tod',
      chat: []
    };

    this.updateMessage = this.updateMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);

  }
  componentDidMount() {
    this.socket = io();
    this.socket.on("message dispatched", data => {
      this.updateMessage(data);
    });
    this.renderChat()
  }

  // componentDidUpdate (_, prevState) {
  //   if(prevState.chat.length !== this.state.chat.length) {
  //     this.renderChat()
  //   }
  // }
  // componentDidUpdate () {
  //   console.log('this is renderChat')
  //   const {chat} = this.state
	// 	return chat.map(({ username, message }, index) => (
	// 		<div key={index}>
	// 			<h3>
	// 				{username}: <span>{message}</span>
	// 			</h3>
	// 		</div>
	// 	))
  // }

  componentWillUnmount() {
    this.socket.disconnect();
  }
  updateMessage(data) {
    // console.log(data);
    this.state.chat.push(data)
    // console.log(this.state.chat)
    this.renderChat()
  }
  
  renderChat = () => {
    // console.log(this.state.chat)
		return this.state.chat.map(({ username, message }, index) => (
			<div key={index}>
				<h3>
					{username}: <span>{message}</span>
				</h3>
			</div>
		))
	}




  // EVERYONE
  sendMessage() {
    this.socket.emit("message sent", {
        username: this.props.user.username,
        message: this.state.message
    });
    // console.log('this is sendMessage')
    this.setState({message: ''})
    // this.renderChat()
  }

  render() {
    // setTimeout(() => {
    //   this.renderChat()
    // }, 1000);
    return (
    
  

      // EVERYONE IN ROOM
      <div className="App">
        <h2>{this.renderChat()}</h2>
        
        <div>
              <input value={this.state.message} onChange={e => {
                this.setState({
                  message: e.target.value
                })
              }} />
              <button onClick={this.sendMessage}>Send</button>
            </div>
              
      </div>
    );
  }
}

const mapStateToProps = (stateRedux) => {
  return {
      user: stateRedux.users.user
  }
}

export default connect(mapStateToProps, {getUser})(ChatBox);









