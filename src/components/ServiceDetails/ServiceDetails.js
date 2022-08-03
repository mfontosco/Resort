import React,{useContext} from 'react'
import styles from './ServiceDetails.module.css'
import { GlobalContext } from '../../context'
import Services from '../Services/Services'

const ServiceDetails = () => {
    const roomData = useContext(GlobalContext)
    // const {data,setData} = roomData
  return (
    <div className={styles.container}>
      
    </div>
  )
}

export default ServiceDetails
