import React,{useContext} from 'react'
import { GlobalContext } from '../../context'
import styles from './FeaturedRooms.module.css'
import { Link } from 'react-router-dom'
import room1 from './room-7.jpeg'
const FeaturedRooms = () => {
    const {featuredRooms} = useContext(GlobalContext)
    console.log(featuredRooms)
    const featured = featuredRooms.map(room =>  {
      return( <div key={room.id} className={styles.cards}>
      <div className={styles.backgroundContainer} >
       <img src={room.images[0]} alt="room"/>
       <div className={styles.cardBtn}>
      <h6>${room.price}</h6>
      <p>per night</p>
       </div>
  
       <Link to={`/rooms/${room.slug}`}>
           <button className={styles.btn}>Features</button>
        </Link>
      </div>
      <div className={styles.roomname}>{room.name}</div>
      </div>)
    })
    

  return (
    <div className={styles.container}>
      <h2>Featured Rooms</h2>
      <div className={styles.cardsContainer}> 
      {featured}
      </div>
    </div>
  )
}

export default FeaturedRooms
