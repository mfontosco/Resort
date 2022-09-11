import React from 'react'
import FeaturedRooms from '../components/FeaturedRooms/FeaturedRooms'
import Header from '../components/Header/Header'
import HomePage from '../components/Home/HomePage'
import Services from '../components/Services/Services'
import styles from './HomeScreen.module.css'

const HomeScreen = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <HomePage/>
      <Services/>
      <FeaturedRooms/>
    </div>
  )
}

export default HomeScreen
