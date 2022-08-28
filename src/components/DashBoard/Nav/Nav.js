import React from 'react'
import styles from './Nav.module.css'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className={styles.container}>
    <div className={styles.navIcon}></div>
      <div className={styles.nav}>
      <div className={styles.form}>
        <input
        type='text'
         placeholder='search' />
      </div>
      <div className={styles.links}>
      <Link to='/'>Home</Link>
      <Link to='/rooms'>Rooms</Link>
      <Link to='/dashboard'>DashBoard</Link>
      <Link to='/booking'>Booking</Link>
     </div>
      </div>
    </div>
  )
}

export default Nav
