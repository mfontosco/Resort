import React from 'react'
import styles from './Card.module.css'

const Card = ({percent,booked,checkedin,backgroundColor,color}) => {
  return (
    <div className={styles.card} style={{backgroundColor:backgroundColor}}>
<div className={styles.heading}>
    <h2 style={{color:color}}>
    {percent}
    </h2>
</div>
<div className={styles.sectionCenter}>
<div>
<h3>{booked}</h3>
<h4>Booked</h4>
</div>
<div>
<h3>{checkedin}</h3>
<h4>Checked In</h4>
</div>
</div>
    </div>
  )
}

export default Card