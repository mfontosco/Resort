import React from 'react'
import styles from './Layout.module.css'
import Nav from '../Nav/Nav'
import SideBar from '../Sidebar/SideBar'

const Layout = ({children}) => {
  return (
    <div  className={styles.container}>
   <Nav/>
  
<div className={styles.children}>
    {children}
</div>
  </div>
  )
}

export default Layout
