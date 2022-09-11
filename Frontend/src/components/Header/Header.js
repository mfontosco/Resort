import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import {FaBars} from 'react-icons/fa'

const Header = () => {
  return (
    <div className={styles.container}>
    {/* <img src={logo} alt='logo' className={styles.img}/> */}
    <div className={styles.logo}><h1>MFON Beach Resort</h1></div>
     <div className={styles.links}>
      <Link to='/home'>Home</Link>
      <Link to='/rooms'>Rooms</Link>
      <Link to='/dashboard'>DashBoard</Link>
      <Link to='/booking'>Booking</Link>
     </div>
     <div>
      <FaBars size={50} className={styles.icon}/>
     </div>
    </div>
  )
}

export default Header
