import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import  logo from './logo.svg'

const Header = () => {
  return (
    <div className={styles.container}>
    {/* <img src={logo} alt='logo' className={styles.img}/> */}
    <div className={styles.logo}><h1>DevBroz Beach Resort</h1></div>
     <div className={styles.links}>
      <Link to='/'>Home</Link>
      <Link to='/rooms'>Rooms</Link>
      <Link to='/dashboard'>DashBoard</Link>
      <Link to='/booking'>Booking</Link>
     </div>
     <div></div>
    </div>
  )
}

export default Header
