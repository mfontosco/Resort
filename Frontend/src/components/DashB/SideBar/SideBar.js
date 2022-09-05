import React from 'react'
import styles from './SideBar.module.css'
import {VscKey,} from 'react-icons/vsc'
import {FaCalendarAlt,FaRegCalendarCheck}  from 'react-icons/fa'
import {FiUsers,FiSettings} from 'react-icons/fi'
import {RiBarChartBoxLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <div className={styles.container}>
    <div className={styles.heading}>
    <h2>MFON Beach Resort</h2>
    </div>
    <div className={styles.list}>
      <ul className={styles.listItems}>
        <li><RiBarChartBoxLine size={24}/><h3>OverView</h3></li>
        <li><FaCalendarAlt size={24}/><h3>Calendar</h3></li>
        <li><VscKey size={24}/><Link to='/booking'><h3>Booking</h3></Link></li>
        <li><FaRegCalendarCheck size={24}/><h3>Earnings</h3></li>
        <li><FiUsers size={24}/>.<h3>Stuff</h3></li>
      </ul>
    </div>
    <div className={styles.icons}>
      <div className={styles.leftIcon}><FiSettings size={24}/></div>
     <div className={styles.rightIcon}> <FiSettings  size={24}/></div>
    </div>
    </div>
  )
}

export default SideBar