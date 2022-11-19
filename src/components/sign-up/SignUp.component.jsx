import React from 'react'

import { Link } from 'react-router-dom';

import FormInput from '../form/FormInput.component'

import './SignUp.styles.css'

const SignUp = () => {
  return (
    <div className='signup-container'>
      <div className='signup-header'>
        <div style={{fontSize: '24px'}}>
          Welcome to <span style={{color: '#F58D50'}}>Kerry Express</span>
        </div>
        <div style={{fontSize: '14px'}}>
          <span style={{color: '#8D8D8D'}}>Have an Account ?</span>
          <br />
          <span>
            <Link to='/'>
              Sign in
            </Link>
          </span>
        </div>
      </div>
      <div style={{fontSize: '58px'}}>Sign up</div>
      <FormInput />
      <button>Sign up</button>
    </div>
  )
}

export default SignUp