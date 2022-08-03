import React,{useContext} from 'react'
import { GlobalContext } from '../../context'
import Room from '../Room/Room'
import {Link} from 'react-router-dom'


const Rooms = () => {
    const {filteredRooms} = useContext(GlobalContext)
    console.log(filteredRooms)
  return (
    <div >
        {/* <Header title='Available Rooms'/> */}
   <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>
   {
        filteredRooms && filteredRooms.length > 0 ? filteredRooms.map((room) => <div key={room.id}> 
            
        <img src={room.images[0]} alt={room.slug} width={200} height={200}/>
        <h3>{room.name}</h3>
        <h3>{room.price}</h3>
        <Link to={`/rooms/${room.slug}`}>
           <button>Featured</button>
        </Link></div>) : (<h2>No room found</h2>)
        }
   </div>
    </div>
  )
}

export default Rooms
