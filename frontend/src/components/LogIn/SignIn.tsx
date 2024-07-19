import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header/Header'
import './LogIn.css'

const SignIn = () => {
    
  return (
    <div>
      <Header/>
      <div className='login-container'>
        <div className='login-container-window'>
            <h1>SignIn</h1>
            <div className='login-form'>
                <form method="post">
                    <input type="text" required placeholder='username'/>
                    <input type="text" required placeholder='email address'/>
                    <input type="text" required placeholder='password'/>
                    <input type="submit"/>
                </form>
            </div>
            <div className='links'>
                <Link to='/login' className='signin-link'>Create a new account</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
