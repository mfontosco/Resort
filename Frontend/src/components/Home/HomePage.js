import React from 'react'
import styles from './HomePage.module.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.sectionCenter}>
    <div className={styles.modal}>
        <h1>LUXURIOUS ROOMS</h1>
        <div className={styles.underline}><hr/></div>
        <h3>Deluxe Rooms at $299</h3>
       
        <Link to='/rooms'> <button>OUR ROOMS</button></Link>
      </div>
     
    </div>
      
    </div>
  )
}

export default HomePage
