import React from 'react'
import Logo from '../../../globalComponent/Logotype/Logo';
import style from './hmid.module.css';
import { Link } from 'react-router-dom';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { listNav } from './hmid.props';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const HMid = () => {
  const[listnavigation,setList] = React.useState([])
  React.useEffect(()=>{
         setList(listNav)
  },[])
  return (
    <div className={style.hmid}>
        <Logo/>
        <div className={style.leftSide}>
             <div className={style.catalog}>
              <MenuOutlinedIcon />
              <span>
                Каталог
              </span>
             </div>
             <div className={style.input}>
               <input placeholder='Поиск'/>
               <SearchOutlinedIcon style={{cursor:"pointer"}}/>
             </div>
             <div className={style.navItems}>
              {
                listnavigation.map((el,ind)=>{
                  return <div className={style.items}>
                     {
                      <el.image/>
                     }
                     <Link key={ind}>{el.decription}</Link>
                    </div>
                })
              }
             </div>
        </div>
    </div>
  )
}

export default HMid