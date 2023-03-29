import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
      <div>
        <h2>Sign-Up</h2>
        <form action=''>
          <div className=''>
            <label htmlFor="name"><strong>Name</strong></label>
            <input type="text" id='name' placeholder='Enter Name' />
          </div>
          <div className=''>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" id='email' placeholder='Enter Email' />
          </div>
          <div className=''>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" id='password' placeholder='Enter Password' />
          </div>

          <button className='btn-login'><strong>Sign Up</strong></button>
          <p>You are agree to aour terms and polices</p>
          <Link to='/' className='btn-account'>Login</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup