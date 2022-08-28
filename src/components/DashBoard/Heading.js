import React from 'react'
import styles from './Heading.module.css'

const Heading = ({text}) => {
  return (
    <div className={styles.container}>
    <h2 className={styles.text}>{text}</h2>
    </div>
  )
}

export default Heading