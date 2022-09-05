import React from 'react'
import styles from './NavBar.module.css'
import {FaSearch,FaRegBell} from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className={styles.container}>
    <FaSearch className={styles.search} size={24}/>
         <input 
         className={styles.input}
            type='text'
            placeholder='enter name'
        />
        <FaRegBell size={24}/>
    </div>
  )
}

export default NavBar