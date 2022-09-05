import React from 'react'
import { Route,Navigate,Routes } from 'react-router-dom'
import {LoginScreen,SignupScreen,DashBoardLayoutScreen,HomeScreen,SingleRoomScreen,RoomsScreen,NotFoundScreen,BookingScreen} from './Index'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<HomeScreen/>}/>
        <Route path='/rooms' element={<RoomsScreen/>}/>
        <Route path='/rooms/:slug' element={<SingleRoomScreen/>}/>
        <Route path='/notfound' element={<NotFoundScreen/>}/>
        <Route path='/booking' element={<BookingScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/' element={<SignupScreen/>}/>
        <Route path='dashboard' element={<DashBoardLayoutScreen/>}/>
        <Route path='*' element={<Navigate to="/notfound"/>}/>
      </Routes>
    </div>
  )
}

export default Router
