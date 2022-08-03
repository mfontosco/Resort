import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import  logo from './logo.svg'

const Header = () => {
  return (
    <div className={styles.container}>
    <img src={logo} alt='logo' className={styles.img}/>
      <Link to='/'>Home</Link>
      <Link to='/rooms'>Rooms</Link>
    </div>
  )
}

export default Header
