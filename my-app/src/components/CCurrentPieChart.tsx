import React, { useEffect, useRef, useState } from 'react'
import Chart from "chart.js";
import StatisticApi from '../api/statistic/statistic.api';
import { notification } from 'antd';

interface MyProps{
    chartType: string
}

const CCurrentPieChart = (props: MyProps) => {
    const {chartType} = props;
    const [pieChartData,setPieChartData] = useState()


    useEffect(()=>{
        const callAPI = async () => {
            await StatisticApi.getCurrentChartData().then((res: any)=>{
                setPieChartData(res.data)
            }).catch((err:any)=>{
                notification.open({
                    message: 'Lay du lieu that bai',
                    description:
                      'Vui long kiem tra lai ket noi mang',
                    onClick: () => {
                      console.log('Notification Clicked!');
                    },
                  });
            })
        }
        callAPI()
    },[])
    // use a ref to store the chart instance since it it mutable
    const chartRef = useRef<Chart | null>(null);

    // callback creates the chart on the canvas element
    const canvasCallback = (canvas: HTMLCanvasElement | null) => {
        if (!canvas) return;
        chartRef.current = new Chart(canvas,
            {
                type: 'doughnut',
                data: {
                    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"], //Thay bang cac nhan rac 
                    datasets: [
                        {
                        label: "Population (millions)",
                            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"], 
                            data: [2478,5267,734,784,433] //So luong rac hien tai. Truyen array tu data goi ve vao day
                        }
                    ]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Predicted world population (millions) in 2050'
                    }
                }
            }
        );
          
    };
  
    // effect to update the chart when props are updated
    useEffect(() => {
      // must verify that the chart exists
      if (chartRef.current) {
      //   chartRef.current.data = formatData(chartData);
        chartRef.current.update();
      }
  
      // cleanup function - I had to remove this as it was causing errors
      /*return () => {
        chartRef.current?.destroy();
      };*/
    }, [chartType]);
  
    return (
      <div className="self-center ">
        <div className="overflow-hidden">
          <canvas ref={canvasCallback}></canvas>
        </div>
      </div>
    );
}

export default CCurrentPieChart