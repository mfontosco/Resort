import React from 'react'
import Chart from 'react-apexcharts'
import styles from './Chart.module.css'

const ChartOverView = () => {
  return (
    <div className={styles.container}>
        <Chart
            type='line'
            width={1200}
            height={400}
            series={[
                {
                    name:'months',
                data:[15,12,17,10.19],
                color:"blue"
                }
            ]}
            options={{
                theme:{
                    mode:"light"
                },
                xaxis:{
                    categories:['15 Nov','16 Nov','17 Nov','18 Nov','19 Nov']
                }
            }}
        />
    </div>
  )
}

export default ChartOverView