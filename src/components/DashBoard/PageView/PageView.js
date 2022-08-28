import React from "react";
import styles from "./PageView.module.css";
import Chart from "react-apexcharts";

const PageView = ({text}) => {
  return (
    <div className={styles.container}>
      
      <div className={styles.chart} style={{backgroundColor:text === "Page View" ? "#1CD6CE" :"#1A4D2E"}}>
        <Chart
          type="line"
          width={400}
          height={400}
          series={[
            {
              name: "company1",
              data: [
                0, 23, 43, 35, 44, 45, 56, 37, 40, 45, 56, 7, 10, 44, 45, 56,
                37, 40, 46, 56, 7, 10,
              ],
              color: "#7E7474",
            },
          ]}
          options={{
            theme: {
              mode: "blue",
            },
            title: {
              text: text,
              align: "left",
              style:{
                color: "white",
              fontSize:"24px",
              fontWeight:"bold"
              
              }
            },
            grid: {
              row: {
                colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                opacity: 0.5,
              },
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              show: false,
              labels: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            },
            grid: {
              show: false,
            },
          }}
        />
      </div>
    </div>
  );
};

export default PageView;
