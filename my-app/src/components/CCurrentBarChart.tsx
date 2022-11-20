import React, { useEffect, useRef, useState } from 'react'
import Chart from "chart.js";
import StatisticApi from '../api/statistic/statistic.api';
import { notification } from 'antd';
import { BinData } from '../common/define-type';

interface MyProps{
    chartType: string
    binData: BinData
    setBinData: React.Dispatch<React.SetStateAction<BinData | undefined>>

}

const CCurrentBarChart = (props: MyProps) => {
    const {chartType} = props;

    const [pieChartData,setPieChartData] = useState()


    // useEffect(()=>{
    //     const callAPI = async () => {
    //         await StatisticApi.getCurrentChartData().then((res: any)=>{
    //             setPieChartData(res.data)
    //         }).catch((err:any)=>{
    //             notification.open({
    //                 message: 'Lay du lieu that bai',
    //                 description:
    //                   'Vui long kiem tra lai ket noi mang',
    //                 onClick: () => {
    //                   console.log('Notification Clicked!');
    //                 },
    //               });
    //         })
    //     }
    //     callAPI()
    // },[])
    // use a ref to store the chart instance since it it mutable
    const chartRef = useRef<Chart | null>(null);

    // callback creates the chart on the canvas element
    const canvasCallback = (canvas: HTMLCanvasElement | null) => {
        if (!canvas) return;
           
        chartRef.current = new Chart(canvas, 
            {
            type: 'bar',
            data: {
                labels: ['Box_CardBoard_Paper', 'Glass_Metal_Plastic', 'Organic', 'Other'],
                datasets: [{
                    label: 'My First Dataset',
                    data: props.binData.Khoangrac.map(item=>item.KhoiLuong), // Truyen array tu data vao day
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        
                    ],
                    borderWidth: 1,
                    },
                    
                ]
                
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

    // useEffect(()=>{
    //     props.setBinData(undefined) // Dung de xoa du lieu bieu do cua vi tri da chon truoc do
    // },[props.binData])
    
    return (
        <div className="self-center ">
            <div className="overflow-hidden">
                <canvas ref={canvasCallback}></canvas>
            </div>
        </div>
    );
}
export default CCurrentBarChart