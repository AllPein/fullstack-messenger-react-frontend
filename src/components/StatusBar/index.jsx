import React from 'react'
import { Avatar, Button, Divider  } from 'antd';
import { BarsOutlined } from '@ant-design/icons';

import './StatusBar.scss';

const StatusBar = props => {
    let isOnline = true
  return (
    <div className="status__container">
        <div className="status__container-avatar" >
            <Avatar
            style={{
                backgroundColor: "#dd6688",
                verticalAlign: 'middle',
            }}
            size={50}
            >
                S
            </Avatar>
        </div>
        <div className="status__container-info">
            <h2>Sasha</h2>
            <p className={isOnline ? 'status__container-info-online' : ''}>{isOnline ? "online" : "offline"}</p>
        </div>
        <div className="status__container-icon">
            <BarsOutlined onClick={() => {}} />
        </div>
        
    </div>
  )
}
 
export default StatusBar;
 