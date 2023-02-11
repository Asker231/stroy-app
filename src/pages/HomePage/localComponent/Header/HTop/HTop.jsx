import React from 'react'
import style from './htop.module.css';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { listNav } from './list.props';
import { Link } from 'react-router-dom';

const HTop = () => {
  const[listNavigation,setListnav] = React.useState([])
  React.useEffect(()=>{
    setListnav(listNav)
  },[])
  return (
    <div className={style.htop}>
       <div className={style.markmap}>
        <RoomOutlinedIcon/>
        <span>Moscow</span>
       </div>
       <div className={style.nav}>
          {
            listNavigation.map((el,ind)=>{
              return <Link key={ind}>{el.title}</Link>
            })
          }
        </div>
    </div>
  )
}

export default HTop