import React from 'react'

import './Form.styles.css'

const FormInput = () => {
  return (
    <div className='input-form-group'>
        <div className='input-form-icon'>
          <label htmlFor="name">Username and email</label><br />
          <i class="bi bi-person-circle icon"></i>
          <input className='input-form' type='text' placeholder='Username and email' />
        </div>
        <div className='input-form-icon'>
          <label htmlFor="name">Username and email</label><br />
          <i class="bi bi-envelope icon"></i>
          <input className='input-form' type='text' placeholder='Username and email' />
        </div>
        <div className='input-form-icon'>
          <label htmlFor="name">Phone</label><br />
          <i className='bi bi-telephone icon'></i>
          <input className='input-form' type='number' placeholder='Phone' />
        </div>
        <div className='input-form-icon'>
          <label htmlFor="name">Password</label><br />
          <i className='bi bi-lock icon'></i>
          <input className='input-form' type='Password' placeholder='Password' />
        </div>
        <div className='input-form-icon'>
          <label htmlFor="name">Confirm Password</label><br />
          <i className='bi bi-lock icon'></i>
          <input className='input-form' type='password' placeholder='Confirm Password' />
        </div>
      </div>
  )
}

export default FormInput