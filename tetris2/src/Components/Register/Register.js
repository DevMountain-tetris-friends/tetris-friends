/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {updateUser} from '../../redux/userReducer';
import {connect} from 'react-redux'
import './Register.scss'

const Register = (props) => {
  const {updateUser, setRegister} = props

  // const [register, setRegister] = useState(false);
  const [errorMsg, setErrorMsg] = useState('')
  
  const [input, setInput] = useState({
    first_name: '',
    last_name: '',
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
        // console.log(res)
        updateUser(res.data)
        setInput({
          first_name: '',
          last_name: '',
          email: '', 
          username: '', 
          password: ''
        })
        props.history.push('/mainpage')
      })
  }
  

  return (
    <div className="register-container">
      <form onSubmit={handleRegister}>
        <div className="form-name">
          <input className="register-input" placeholder="First Name" onChange={handleChange}
          value={input.first_name} name='first_name'/>
          <input className="register-input" placeholder="Last Name" onChange={handleChange} value={input.last_name} name='last_name'/>
        </div>
        <div className="form-email">
          <input className="register-input" placeholder="Email" onChange={handleChange} value={input.email} name='email'/>
        </div>
        <div className="form-login-info">
          <input className="register-input" placeholder="Username" onChange={handleChange} value={input.username} name='username'/>
          <input className="register-input" placeholder="Password" onChange={handleChange} value={input.password} name='password'/>
        </div>
        <div className="form-button">
          <button type="submit" name="submit">SUBMIT</button>
          <button onClick={() => setRegister(false)}>BACK</button> 
        </div>
        {errorMsg ? <p className="errMsg">{errorMsg}</p> : null}
      </form>
    </div>
  )
}

export default withRouter(connect(null,{updateUser})(Register))