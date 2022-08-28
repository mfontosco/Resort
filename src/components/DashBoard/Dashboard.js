import React from 'react'
import Card from './Cards/Card'
import Layout from './Layout/Layout'
import styles from './DashBoard.module.css'
import ChartSurvey from './Charts/ChartSurvey'
import PageView from './PageView/PageView'
import SideBar from './Sidebar/SideBar'
import Heading from './Heading'
import Lists from './Lists/Lists'

const Dashboard = () => {
  return (
    <div >
   
      <Layout className={styles.container}>
      
      <SideBar style={styles.SideBar}/>
      
       <div className={styles.layoutContainer}>
       <div className={styles.Card}>
       <Card 
       order='Orders' 
       img='' 
        value='450'
        increase='60% increase....'
        color='#5B7DB1'
       />
       <Card
        order='New Booking' 
        img='' 
        value='155'
        increase='40% increase....'
        color='#FF5F00'
       />
       <Card
        order='Inquiry' 
       img='' 
        value='52'
        increase='80% increase....'
        color='#7F5283'
       />
       <Card
        order='Total Earning' 
        img='' 
        value='1352'
        increase='60% increase....'
        color='#1A4D2E'
       />
       </div>
       <ChartSurvey/>
       <div className={styles.main}>
        <div className={styles.page}>
        <PageView className={styles.PageView} text='Page View' />
        <PageView className={styles.PageView} text='Earning'/>
         </div>
         <div className={styles.notifications}>
          <Heading text="Notifications"/>
          <Lists name='Grace' message='Added you as a friend'/>
        </div>
        <div className={styles.earning}>
        <Heading text="Earnings"/>
        </div>
       </div>
       </div>
      </Layout>
    </div>
  )
}

export default Dashboard
