import { Button, Select } from "antd";
import Chart from "chart.js";
import { useRef, useEffect, useState } from "react";
import DatePicker from "./CDatePicker";

import "antd/dist/antd.css";
import "../App.scss";
import StatisticApi from "../api/statistic/statistic.api";
import CCurrentPieChart from "./CCurrentPieChart";
import CCurrentBarChart from "./CCurrentBarChart";
import CPeriodTimeBarChart from "./CPeriodTimeBarChart";


interface MyProps{
    binId?: string
}


// want to see some changes in the props on order to test MyChart
export default (props: MyProps) => {
    const [chartType,setChartType] = useState('');
    const [showCurrentPieChart,setShowCurrentPieChart] = useState(true);
    const [showCurrentBarChart,setShowCurrentBarChart] = useState(false);
    const [showPeriodTimeBarChart,setShowPeriodTimeBarChart] = useState(false);
    const [data, setData] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
    const [start,setStart] = useState<Date>(new Date());
  
    return (
        <div>
            <div className="chart-selector">
                
                {/* <DatePicker
                    allowClear={false}
                    bordered={false}
                    onChange={onDatePickerChange}
                    defaultValue={start}
                    style={{ marginLeft: 15 }}
                /> */}
            </div>
            <div className="chart">
        
                <div className="chart-button">
                    <Button type="primary" className="button-styled" onClick={()=>{
                        setChartType('current_pie')
                        setShowCurrentPieChart(true);
                        setShowCurrentBarChart(false);
                        setShowPeriodTimeBarChart(false);
                    }}>View 1</Button>    
                    <Button type="primary" className="button-styled" onClick={()=>{
                        setChartType('current_bar');
                        setShowCurrentPieChart(false);
                        setShowCurrentBarChart(true);
                        setShowPeriodTimeBarChart(false);
                    }}>View 2</Button>
                    <Button type="primary" className="button-styled" onClick={()=>{
                        setChartType('period_time_bar');
                        setShowCurrentPieChart(false);
                        setShowCurrentBarChart(false);
                        setShowPeriodTimeBarChart(true);
                    }}>View 3</Button>
                </div>
                {/* <MyChart chartType={chartType} /> */}
                {
                    showCurrentPieChart && 
                    <CCurrentPieChart
                        chartType="current_pie"
                    />
                }
                {
                    showCurrentBarChart && 
                    <CCurrentBarChart
                        chartType="current_bar"
                    />
                }
                {
                    showPeriodTimeBarChart && 
                    <CPeriodTimeBarChart
                        binId = {props.binId}
                        chartType="period_time_bar"
                    />
                }
            </div>
        </div>
        
    );
};
