import React from 'react'
import styles from './Lists.module.css'


const Lists = ({name,message}) => {
  return (
    <div className={styles.container}>
        <ul>
     <li><div> icon</div><h2>{name}</h2> <h2>{message}</h2></li>
        </ul>
    </div>
  )
}

export default Lists