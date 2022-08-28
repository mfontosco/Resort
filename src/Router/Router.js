import React from 'react'
import { Route,Navigate,Routes } from 'react-router-dom'
import {HomeScreen,SingleRoomScreen,RoomsScreen,NotFoundScreen,DashBoardScreen,BookingScreen} from './Index'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/rooms' element={<RoomsScreen/>}/>
        <Route path='/rooms/:slug' element={<SingleRoomScreen/>}/>
        <Route path='/notfound' element={<NotFoundScreen/>}/>
        <Route path='/dashboard' element={<DashBoardScreen/>}/>
        <Route path='/booking' element={<BookingScreen/>}/>
        <Route path='*' element={<Navigate to="/notfound"/>}/>
      </Routes>
    </div>
  )
}

export default Router
