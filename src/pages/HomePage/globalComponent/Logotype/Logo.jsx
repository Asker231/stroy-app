import React from 'react'
import style from './logo.module.css';
import logo from './assets/Logo.svg'
const Logo = () => {
  return (
    <div className={style.logo}>
        <img src={logo} alt="logo" />
    </div>
  )
}

export default Logo