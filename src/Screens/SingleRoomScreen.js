import { useParams } from 'react-router-dom'
import React, {useContext, useState,useEffect} from 'react'
import { GlobalContext } from '../context'
import HomePage from '../components/Home/HomePage'
import Header from '../components/Header/Header'
import styles from  './SingleRooms.module.css'

const SingleRoom = () => {
  const [room, setRoom] = useState(null)
  const [loading, setLoading] = useState(true)
  const {gettingSingleRm} = useContext(GlobalContext)
  const {slug} = useParams()

  useEffect(() => {
      console.log('roomcalled')
      console.log(slug)
      if(!room || slug !== room.slug){
        const rm=  gettingSingleRm(slug)
        console.log(rm, rm)
        setRoom(rm)
       setLoading(false)
      }
  }, [slug])
  console.log(room) 

  return (
    <div>
        {loading && (<h2>Loading...</h2>) } 
        {room && <div>
          {/* <Header/>
          <HomePage/> */}
          {
           <div className={styles.contain}>{room.images.length > 0 && room.images.map((img, i)=> <div key={i} className={styles.imgContainer}><img  src={img} alt={room.name} width={200} height={200}/></div>)}</div> 
          }

          <div className={styles.info}>
            <div>
              <h2>Details</h2>
              <div className={styles.description}>
              <p>{room.description ? room.description :""}</p>
              </div>
            </div>
            <div>
            <h2>Info</h2>
           <div className={styles.mainInfo}> 
           <ul>
              <li><h3>Price:${room.price ? room.price : ''}</h3></li>
              <li><h3>Size:{room.size? room.size : ''} SQFT</h3></li>
              <li><h3>Max Capacity: {room.capacity} People</h3></li>
              <li><h3>Pets Allowed</h3></li>
              <li><h3> Free Breakfast Included</h3></li>
            </ul></div>
            {/* <h3>{room.price ? room.price : ''}</h3>
          <h3>{room.name ? room.name : ''}</h3> */}
            </div>
          </div>

         
         
          
      </div>}
    </div>
    
    
  )
}

export default SingleRoom