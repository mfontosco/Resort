import React,{useContext} from 'react'
import { GlobalContext } from '../../context'
import styles from './Rooms.module.css'
import {Link} from 'react-router-dom'


const Rooms = () => {
    const {filteredRooms} = useContext(GlobalContext)
    console.log(filteredRooms)
  return (
    <div className={styles.container}>
   <div className={styles.roomContainer} >
   {
        filteredRooms && filteredRooms.length > 0 ? filteredRooms.map((room) => <div key={room.id}> 
            
        <img src={room.images[0]} alt={room.slug} />
        <h3 className={styles.roomname}>{room.name}</h3>
        <div className={styles.price}>
        <h3 >{room.price}</h3>
        <h5>per night</h5>
        </div>
        <Link to={`/rooms/${room.slug}`}>
           <button>Featured</button>
        </Link></div>) : (<h2>No room found</h2>)
        }
   </div>
    </div>
  )
}

export default Rooms
