import React from 'react'
import { Link } from 'react-router-dom';
import style from './hbot.module.css';
import { items } from './hbot.props';

const HBot = () => {
  const[item,setItems] = React.useState([])
  React.useEffect(()=>{
      setItems(items)
  },[])
  return (
    <div className={style.hbot}>
       {
        item.map((el,ind)=>{
          return <Link key={ind}>{el.title}</Link>
        })
       }
    </div>
  )
}

export default HBot