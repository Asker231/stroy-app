import React from 'react'
import style from './header.module.css';
import HMid from './HMid/HMid';
import HTop from './HTop/HTop';
import HBot from './Hbot/HBot.jsx'


const Header = () => {
  return (
    <div className={style.header}>
     <HTop/>
     <HMid/>
     <HBot/>
    </div>
  )
}

export default Header