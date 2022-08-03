import React from 'react'
import styles from './RoomList.module.css'
import { Link } from 'react-router-dom'

const Roomlist = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.sectionCenter}>
    <div className={styles.modal}>
        <h1>OUR ROOMS</h1>
        <div className={styles.underline}><hr/></div>
        <Link to='/'><button>RETURN HOME</button></Link>
        
      </div>
     
    </div>
    </div>
  )
}

export default Roomlist
