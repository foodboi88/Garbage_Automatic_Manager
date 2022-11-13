import { Button, Select } from "antd";
import Chart from "chart.js";
import { useRef, useEffect, useState } from "react";
import DatePicker from "./CDatePicker";

import "antd/dist/antd.css";
import "../App.scss";

interface Props {
  chartData: number[];
}

const MyChart = ({ chartData }: Props) => {
  // helper function to format chart data since you do this twice
  const formatData = (data: number[]): Chart.ChartData => ({
    labels: ["a", "b", "c", "d", "e", "f", "g", "h"],
    datasets: [{ data }]
  });

  // use a ref to store the chart instance since it it mutable
  const chartRef = useRef<Chart | null>(null);

  // callback creates the chart on the canvas element
  const canvasCallback = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    // const ctx = canvas.getContext("2d");
    // if (ctx) {
    //   chartRef.current = new Chart(ctx, {
    //     type: "radar",
    //     data: formatData(chartData),
    //     options: { responsive: true }
    //   });
    // }
    // else{
        chartRef.current = new Chart(canvas, {
            type: 'bar',
            data: {
                labels: ['Box_CardBoard_Paper', 'Glass_Metal_Plastic', 'Organic', 'Other'],
                datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 80, 81],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
                      'rgba(255, 205, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                      'rgb(255, 99, 132)',
                      'rgb(255, 159, 64)',
                      'rgb(255, 205, 86)',
                      'rgb(75, 192, 192)',
                      'rgb(54, 162, 235)',
                      'rgb(153, 102, 255)',
                      'rgb(201, 203, 207)'
                    ],
                    borderWidth: 2,
                  },
                  
                ]
                
            }
        });
    // }
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
  }, [chartData]);

  return (
    <div className="self-center ">
      <div className="overflow-hidden">
        <canvas ref={canvasCallback}></canvas>
      </div>
    </div>
  );
};


// want to see some changes in the props on order to test MyChart
export default () => {
  const [data, setData] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
    const [start,setStart] = useState<Date>(new Date());
  const onClick = () => {
    setData((prevData) => prevData.slice(1).concat(10 * Math.random()));
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onDatePickerChange = () => {

  }
  return (
    <div>
        <div className="chart-selector">
            <Select
                defaultValue="Hà Nội"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                    {
                    value: 'jack',
                    label: 'Hồ Chí Minh',
                    },
                    {
                    value: 'lucy',
                    label: 'Đà Nẵng',
                    },
                    {
                    value: 'disabled',
                    label: 'Hải Phòng',
                    },
                    {
                    value: 'Yiminghe',
                    label: 'Đồng Nai',
                    },
                ]}
            />
            <DatePicker
                allowClear={false}
                bordered={false}
                onChange={onDatePickerChange}
                defaultValue={start}
                style={{ marginLeft: 15 }}
            />
        </div>
        <div className="chart">
      
            <div className="chart-button">
                <Button type="primary" className="button-styled" onClick={onClick}>Change</Button>    
                <Button type="primary" className="button-styled" onClick={onClick}>Change</Button>
                <Button type="primary" className="button-styled" onClick={onClick}>Change</Button>
                <Button type="primary" className="button-styled" onClick={onClick}>Change</Button>  
            </div>
            <MyChart chartData={data} />
        </div>
    </div>
    
  );
};
