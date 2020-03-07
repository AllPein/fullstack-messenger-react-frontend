import React from 'react'
import { Avatar, Button, Divider  } from 'antd';
import { BarsOutlined } from '@ant-design/icons';

import './StatusBar.scss';

const StatusBar = ({partner, isOnline}) => {
  return (
    <div className="status__container">
        <div className="status__container-avatar" >
            <Avatar
            style={{
                backgroundColor: partner.avatarColor,
                verticalAlign: 'middle',
            }}
            size={50}
            >
                {partner.username[0].toUpperCase()}
            </Avatar>
        </div>
        <div className="status__container-info">
            <h2>{partner.username}</h2>
            <p className={isOnline ? 'status__container-info-online' : ''}>{isOnline ? "online" : "offline"}</p>
        </div>
        <div className="status__container-icon">
            <BarsOutlined onClick={() => {}} />
        </div>
        
    </div>
  )
}
 
export default StatusBar;
 