import React from 'react'

import { Outlet } from 'react-router-dom';

import './Logo.styles.css'

const Logo = () => {
  return (
    <div className='logo-container'>
      <div className='logo'>
        <span>KERRY</span>
        <br />
        <span>EXPRESS</span>
      </div>
      <Outlet />
    </div>
  )
}

export default Logo