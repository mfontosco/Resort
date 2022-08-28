import React from 'react'
import styles from './Cards.module.css'
import {GiCardRandom} from 'react-icons/gi'

const Card = ({img,order,value,increase,color}) => {
  return (
    <div className={styles.Card} style={{backgroundColor:color}}>
      <div  className={styles.CardImage}>
        {/* <img  src={img} className={styles.img}/> */}
        <div className={styles.iconContainer}>
<GiCardRandom className={styles.img}/>
        </div>
      </div>
      <div className={styles.CardsDetails}>
        <h3>{order}</h3>
        <h3>{value}</h3>
        <hr></hr>
        <h3>{increase}</h3>
      </div>
    </div>
  )
}

export default Card
