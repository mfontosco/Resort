import React from 'react'
import FeaturedRooms from '../components/FeaturedRooms/FeaturedRooms'
import Header from '../components/Header/Header'
import HomePage from '../components/Home/HomePage'
import Services from '../components/Services/Services'

const HomeScreen = () => {
  return (
    <div>
      <Header/>
      <HomePage/>
      <Services/>
      <FeaturedRooms/>
    </div>
  )
}

export default HomeScreen
