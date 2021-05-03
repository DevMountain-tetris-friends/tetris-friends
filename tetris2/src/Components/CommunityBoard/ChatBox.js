import React, { Component } from 'react';
import io from 'socket.io-client';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      message: "",
      room: null,
      joined: false
    };

    this.updateMessage = this.updateMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    // EVERYONE IN ROOM
    this.joinRoom = this.joinRoom.bind(this);
    this.joinSuccess = this.joinSuccess.bind(this);
  }
  componentDidMount() {
    this.socket = io();
    this.socket.on("message dispatched", data => {
      this.updateMessage(data);
    });
    // EVERYONE IN ROOM
    this.socket.on("room joined", data => {
      this.joinSuccess();
    });
  }
  componentWillUnmount() {
    this.socket.disconnect();
  }
  updateMessage(message) {
    console.log(message);
    this.setState({
      message
    });
  }

  // EVERYONE
  // sendMessage() {
  //   this.socket.emit("message sent", {
  //     message: this.state.input
  //   });
  // }
  // EVERYONE BUT ME
  // sendMessage() {
  //   this.socket.emit('message sent', {
  //     message: this.state.input
  //   })
  //   this.setState({
  //     message: this.state.input
  //   })
  // }
  // EVERYONE IN ROOM
  sendMessage() {
    this.socket.emit('message sent', {
      message: this.state.input,
      room: this.state.room
    })
  }

  joinRoom() {
    if (this.state.room) {
      this.socket.emit("join room", {
        room: this.state.room
      });
    }
  }
  joinSuccess() {
    this.setState({
      joined: true
    });
  }
  render() {
    return (
      // EVERYONE AND EVERYONE BUT ME
      // <div className="App">
      //   <h2>{this.state.message}</h2>
      //   <input
      //     value={this.state.input}
      //     onChange={e => {
      //       this.setState({
      //         input: e.target.value
      //       });
      //     }}
      //   />
      //   <button onClick={this.sendMessage}>Send</button>
      // </div>

      // EVERYONE IN ROOM
      <div className="App">
        {this.state.joined ? <h1>My Room: {this.state.room}</h1> : null}
        <h2>{this.state.message}</h2>
        {
          this.state.joined
            ?
            <div>
              <input value={this.state.input} onChange={e => {
                this.setState({
                  input: e.target.value
                })
              }} />
              <button onClick={this.sendMessage}>Send</button>
            </div>
            :
            <div>
              <input value={this.state.room} onChange={e => {
                this.setState({
                  room: e.target.value
                })
              }} />
              <button onClick={this.joinRoom}>Join</button>
            </div>
        }
      </div>
    );
  }
}

export default App;









// import TextField from "@material-ui/core/TextField"
// import React, { useEffect, useRef, useState } from "react"
// import io from "socket.io-client"
// import socketIOClient from 'socket.io-client'

// function App() {

//     const socket = socketIOClient('/', {
//         transports: ['websocket'],
//         path: '/socket', // added this line of code
//     });

// 	const [ state, setState ] = useState({ message: "", username: "" })
// 	const [ chat, setChat ] = useState([])

// 	const socketRef = useRef();

//     useEffect(() => {
//         socket.on('connect', () => {
//             console.log('connected')
//         })
//         socket.on('event', (data) => {
//             console.log(data)
//         })
//     }, [])

// 	// useEffect(
// 	// 	() => {
// 	// 		socketRef.current = io.connect("http://localhost:4000")
// 	// 		socketRef.current.on("message", ({ username, message }) => {
// 	// 			setChat([ ...chat, { username, message } ])
// 	// 		})
// 	// 		return () => socketRef.current.disconnect()
// 	// 	},
// 	// 	[ chat ]
// 	// )

// 	const onTextChange = (e) => {
// 		setState({ ...state, [e.target.name]: e.target.value })
// 	}

// 	const onMessageSubmit = (e) => {
//         console.log('this is message submit')
// 		const { username, message } = state
// 		socketRef.current.emit("message", { username, message })
// 		e.preventDefault()
// 		setState({ message: "", username })
// 	}

// 	const renderChat = () => {
// 		return chat.map(({ username, message }, index) => (
// 			<div key={index}>
// 				<h3>
//                     this is a test
// 					{username}: <span>{message}</span>
                    
// 				</h3>
// 			</div>
// 		))
// 	}

// 	return (
// 		<div className="card">
// 			<form onSubmit={onMessageSubmit}>
// 				<h1>Messenger</h1>
// 				<div className="name-field">
// 					<TextField name="username" onChange={(e) => onTextChange(e)} value={state.username} label="Name" />
// 				</div>
// 				<div>
// 					<TextField
// 						name="message"
// 						onChange={(e) => onTextChange(e)}
// 						value={state.message}
// 						id="outlined-multiline-static"
// 						variant="outlined"
// 						label="Message"
// 					/>
// 				</div>
// 				<button>Send Message</button>
// 			</form>
// 			<div className="render-chat">
// 				<h1>Chat Log</h1>
// 				{renderChat()}
// 			</div>
// 		</div>
// 	)
// }

// export default App