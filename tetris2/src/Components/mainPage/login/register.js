import React, {useState} from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'
// import {updateUser} from '../../redux/userReducer'
// import {connect} from 'react-redux'
import './register.scss'

const Register = (props) => {

  const {updateUser} = props

  const [errorMsg, setErrorMsg] = useState('')
  
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '', 
    username: '', 
    password: ''
  })

  const handleChange = (e) => {
    setInput({
      ...input, 
      [e.target.name]: e.target.value
    })
  };

  const handleRegister = (e) => {
    e.preventDefault()
    //stops from refreshing. Always apply to forms
    // console.log(input)
    axios.post('/auth/register', input)
      .then(res => {
        updateUser(res.data)
        setInput({
          firstName: '',
          lastName: '',
          email: '', 
          username: '', 
          password: ''
        })
        props.history.push('/')
      })
      .catch(err => setErrorMsg(err.response.data))
  }
  

  return (
    <div className="register-container">
      <form onSubmit={handleRegister}>
        <input className="register-input" placeholder="First Name" onChange={handleChange}/>
        <input className="register-input" placeholder="Last Name" value={input.firstName}/>
        <input className="register-input" placeholder="Email" onChange={handleChange} value={input.lastName}/>
        <input className="register-input" placeholder="Username" onChange={handleChange} value={input.username}/>
        <input className="register-input" placeholder="Password" onChange={handleChange} value={input.password}/>
        <button type="submit" name="submit">SUBMIT</button>
        {errorMsg ? <p className="errMsg">{errorMsg}</p> : null}
      </form>
    </div>
  )
}

export default Register
