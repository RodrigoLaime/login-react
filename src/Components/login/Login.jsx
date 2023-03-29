import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Validation from './LoginValidation.js'

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div>
      <div>
        <h2>Sing-In</h2>
        <form action='' onSubmit={handleSubmit}>
          <div className=''>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" id='email' placeholder='Enter Email' name='email'
              onChange={handleInput} />
            {errors.email && <span className='text-red'>{errors.email}</span>}
          </div>

          <div className=''>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" id='password' placeholder='Enter Password' name='password'
              onChange={handleInput} />
            {errors.password && <span className='text-red'>{errors.password}</span>}
          </div>

          <button type='submit' className='btn-login'><strong>Log in</strong></button>

          <p>You are agree to aour terms and polices</p>

          <Link to='/signup' className='btn-account'>Create Account</Link>
        </form>
      </div>
    </div>
  )
}

export default Login