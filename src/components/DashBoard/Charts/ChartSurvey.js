import React from 'react'
import styles from './ChartSurvey.module.css'
import Chart from 'react-apexcharts'

const ChartSurvey = () => {
  return (
    <div className={styles.container}>
      <h1>ChartSurvey</h1>
      <Chart
      type='area'
      width={1900}
      height={600}
      series={[
        {
name:"company1",
data:[0,500,350,222,400,132,322],
color:"#7E7474"
        },
        {
name:"company2",
data:[0,440,422,122,500,132,422],
color:"#64DFDF"
        },
        {
name:"company3",
data:[0,430,400,100,300,132,222],
color:"#E6E6E6"
        },
      ]}
      options={{
        theme:{
         mode:"light"
        },
        chart:{
            stacked:false
        },
        tooltip:{
            followCursor:true
        },
        dataLabels:{
formatter:(val)=>{
    return `$${val}`
},
style:{
    colors:['#fff','#ddd','#64DFDF'],
    fontSize:16

        }
        },
        yaxis:{
            labels:{
                formatter:(val)=>{
                    return `${val}`
                },
                style:{
                    colors:['#fff'],
                    fontSize:24
                }
            }
        }
        
      }}
      >

      </Chart>
      
    </div>
  )
}

export default ChartSurvey
