import React,{useContext}from 'react'
import styles from './Header.module.css'
import { GlobalContext } from '../../../context'

const Header = () => {
  const {input} =useContext(GlobalContext)
  return (
    <div className={styles.container}>
       <h1>Welcome Benjamin</h1>
       <p>You have 9 rooms at Saint Denis</p>
    </div>
  )
}

export default Header