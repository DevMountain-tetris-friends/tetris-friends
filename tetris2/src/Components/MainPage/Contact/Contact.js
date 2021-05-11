import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <Link to='/mainpage'><FaTimes/>Back</Link>
    </div>
  )
}

export default Contact
