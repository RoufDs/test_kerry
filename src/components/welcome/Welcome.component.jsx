import React from 'react'

import { Link } from 'react-router-dom';

import { ReactComponent as WelcomeIcon } from '../../assets/Frame.svg'

import './welcome.styles.css'

const Welcome = () => {
  return (
    <div className='welcome-container'>
      <WelcomeIcon />
      <div className='welcome-text'>
        Welcome to <span>Kerry Express</span>
        <br />
        <span>Kerry1234</span>
      </div>
      <Link to='signup'>
        <button>Back to home</button>
      </Link>
    </div>
  )
}

export default Welcome