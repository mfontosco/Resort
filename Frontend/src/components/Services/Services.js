import React from 'react'
import styles from './Services.module.css'
import {FaShuttleVan,FaCocktail,FaHiking} from 'react-icons/fa'

const Services = () => {
  return (
    <div className={styles.container}>
       <div>
       <h2>Services</h2>
       </div>
    <div className={styles.cardContainer}>
    <div className={styles.card}>
        <div className={styles.img}>
        <FaCocktail className={styles.icon} size="4em"/>
        </div>
        <h3>Free Cocktail</h3>
        <p>Lorem ipsum dolor sit amet consectetur</p>
    </div>
    <div className={styles.card}>
        <div className={styles.img}>
        <FaHiking className={styles.icon} size="4em"/>
        </div>
        <h3>Endless Hiking</h3>
        <p>Lorem ipsum dolor sit amet consectetur</p>
    </div>
    <div className={styles.card}>
        <div className={styles.img}>
        <FaShuttleVan className={styles.icon} size="4em"/>
        </div>
        <h3>Free ShuttleVan</h3>
        <p>Lorem ipsum dolor sit amet consectetur</p>
    </div>
    <div className={styles.card}>
        <div className={styles.img}>
        <FaCocktail className={styles.icon} size="4em"/>
        </div>
        <h3> Free Cocktail</h3>
        <p>Lorem ipsum dolor sit amet consectetur</p>
    </div>
    </div>
      
    </div>
  )
}

export default Services
