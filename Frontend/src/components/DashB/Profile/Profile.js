import React from 'react'
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div className={styles.container}>
     <h2>PAULINUS MFON</h2>
        <div className={styles.imageContainer}>
           <img src='https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60' alt=''/> 
        </div>
    </div>
  )
}

export default Profile