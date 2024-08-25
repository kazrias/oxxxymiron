import React from 'react'

import logo from '../../images/logo.webp'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <div className='logo'>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  )
}
