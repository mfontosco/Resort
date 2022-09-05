import React from 'react'
import styles from './BookingListItems.module.css'

const BookingListItems = ({img,guest,name,paid,color}) => {
  return (
    <div className={styles.container}>
<div className={styles.imageContainer}>
<img src={img} alt='customer'/>
</div>
<div className={styles.details}>
<div >
    <h3>{name}</h3>
    <p>SQL . <span>{guest}</span></p>
</div>
<div>
    <h3>12/08/22</h3>
    <h4 style={{backgroundColor:color}}>{paid}</h4>
</div>
</div>
    </div>
  )
}

export default BookingListItems