import React from 'react'
import Header from '../components/Header/Header'
import Roomlist from '../components/RoomList/Roomlist'
import SearchRooms from '../components/SearchRooms/SearchRooms'
import Rooms from '../components/Rooms/Rooms'

const RoomsScreen = () => {
  return (
    <div>
     <Header/>
     <Roomlist/>
     <SearchRooms/>
     <Rooms/>
    </div>
  )
}

export default RoomsScreen
