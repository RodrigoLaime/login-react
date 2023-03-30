import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation.js';
import axios from 'axios';

function Signup() {

  const [values, setValues] = useState({
    name: '',
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

    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/signup', values)
        .then(res => {
          console.log(res)
          navigate('/');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      <div>
        <h2>Sign-Up</h2>
        <form action='' onSubmit={handleSubmit}>
          <div className=''>
            <label htmlFor="name"><strong>Name</strong></label>
            <input type="text" id='name' placeholder='Enter Name' name='name' onChange={handleInput} />
            {errors.name && <span className='text-red'>{errors.name}</span>}
          </div>
          <div className=''>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" id='email' placeholder='Enter Email' name='email' onChange={handleInput} />
            {errors.email && <span className='text-red'>{errors.email}</span>}
          </div>
          <div className=''>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" id='password' placeholder='Enter Password' name='password' onChange={handleInput} />
            {errors.password && <span className='text-red'>{errors.password}</span>}
          </div>

          <button type='submit' className='btn-login'><strong>Sign Up</strong></button>
          <p>You are agree to aour terms and polices</p>
          <Link to='/' className='btn-account'>Login</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup