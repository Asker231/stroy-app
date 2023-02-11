import React from 'react'
import style from './homepage.module.css';
import Header from './localComponent/Header/Header';

const HomePage = () => {
  return (
    <div className={style.homepage}>
        <Header/>
    </div>
  )
}

export default HomePage