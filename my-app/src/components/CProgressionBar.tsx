import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import "antd/dist/antd.css";
import "../App.scss";
import { Button } from 'antd';


const CProgressionBar = () => {
    const now = 80;
    return (
        <div style={{display:'flex'}}>
            <div className='progression-bar'>
                <div>Label abc:</div>
                <ProgressBar animated label={`${now}%`} now={now} max={100}/>
            </div>
            <Button className='button-styled' type='primary' style={{marginTop: '24px'}}>Reset</Button>
        </div>
        
         
    )
}

export default CProgressionBar