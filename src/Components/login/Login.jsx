import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation.js'
import './Login.css'

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if (errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/login', values)
        .then(res => {
          console.log(res.data)
          if (res.data === 'success') {
            navigate('/home');
          } else {
            alert('No record existed');
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='container-singin'>
      <div className='container-signin--form'>
        <h2>Sing-In</h2>
        <p>Welcome to signin!</p>
        <form action='' className='form' onSubmit={handleSubmit}>
          <div className='form-email'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" id='email' placeholder='Enter Email' name='email'
              onChange={handleInput} />
            {errors.email && <span className='text-red'>{errors.email}</span>}
          </div>

          <div className='form-password'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" id='password' placeholder='Enter Password' name='password'
              onChange={handleInput} />
            {errors.password && <span className='text-red'>{errors.password}</span>}
          </div>

          <button type='submit' className='btn-login'><strong>Sing in</strong></button>

          <p>You are agree to aour terms and polices</p>

          <p>don't have an account? <Link to='/signup' className='btn-account'>Create Account</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login