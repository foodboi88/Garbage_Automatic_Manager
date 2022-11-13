import React, { useState } from 'react'
import {
    MenuOutlined,
  UserOutlined
} from '@ant-design/icons';
import "antd/dist/antd.css";
import "../../App.scss";
import { Button, Dropdown, Menu, Switch } from 'antd';
import CChart from '../../components/CChart';
import { useHistory } from 'react-router-dom';
import CProgressionBar from '../../components/CProgressionBar';
import CGabargeImages from '../../components/CGabargeImages';

const Home = () => {

  const [visible, setVisible] = useState<boolean>(false);
  // const [isOnModal,setIsOnModal] = useState<boolean>(false);
  const history = useHistory();

  const handleMenuClick = (e: any) => {
      if (e.key === '1' || e.key === '2') {
      setVisible(false);
      }
  };

  // const toggle = () => {
  //     setIsOnModal(!isOnModal);
  // };

  const handleVisibleChange = (flag: boolean) => {
      setVisible(flag);
  };
  return (
    <div>
      <div>
        <div className='main-title color-title'>HỆ THỐNG IOT NHẬN DIỆN RÁC THẢI</div>
        <div className='main-title'>From team 15 with love</div>
      </div>
      <div className='body-content'>
        <div className='account'>
          <UserOutlined />
          <div style={{margin:'10px'}}>
            Hello, Hieudz
          </div>
          <Dropdown 
              onVisibleChange={handleVisibleChange} 
              visible={visible}
              overlay={
              <Menu
              onClick={handleMenuClick}
                  items={[
                  {
                      key: '1',
                      label: (
                      <div>
                          <a target="_blank" rel="noopener noreferrer" >
                          Cài đặt tài khoản
                          </a>
                      </div>
                      
                      ),
                  },
                  {
                      key: '2',
                      label: (
                      <div>
                          <a onClick={()=>{
                          // setIsOnModal(true);
                          // history.push("/register")
                          }}>
                          Tạo tài khoản mới 
                          </a>
                      </div>
                      ),
                  },
                  {
                      key: '3',
                      label: (
                      <div className='flex-row'>
                          <p>
                          Theme
                          </p>
                          <Switch checkedChildren="Sáng" unCheckedChildren="Tối" defaultChecked />
                      </div>
                      ),
                  },
                  {
                      type: "divider",
                  },
                  {
                      key: '4',
                      label: (
                      <a  onClick={()=>{
                          localStorage.removeItem('token');
                          localStorage.removeItem('user');

                          
                          // history.push('/');
                          // window.location.reload();
                      }}>
                          Đăng xuất
                      </a>
                      ),
                  },
                  
                  ]}
              />
              } 
              // placement="topCenter" 
              arrow 
              trigger={["click"]}

          >
              <div style={{marginBottom: '6px'}} onClick={(e) => e.preventDefault()}><MenuOutlined /></div>
          </Dropdown>
        </div>
        <div className='statistic'>
          <div>
            <CChart/>
          </div>
          <div className='progression-bar-group'>
            <CProgressionBar/>
            <CProgressionBar/>
            <CProgressionBar/>
            <CProgressionBar/>
          </div>
        </div>
        
      </div>
      <div className='body-content'>
        <CGabargeImages/>

      </div>
    </div>
  )
}

export default Home