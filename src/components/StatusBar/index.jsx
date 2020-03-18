import React from 'react'
import { Avatar, Button, Divider  } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './StatusBar.scss';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';

const StatusBar = ({partner, isTyping, currentDialogId, typingDialogIds}) => {
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
            {isTyping && typingDialogIds.indexOf(currentDialogId) != -1 ? (
                <div className='status__container-info-typing'><p>печатает...</p></div>
                
            ) : (
                <p className={partner.isOnline ? 'status__container-info-online' : ''}>
                    { partner.isOnline ? "online" : 
                    `был в сети ${formatDistanceToNow(new Date(partner.lastSeen),  {locale: ruLocale, addSuffix: true } )}` }
                </p>
            )}
            
        </div>
        <div className="status__container-icon">
            <Link to='/'><CloseOutlined  /></Link>
        </div>
        
    </div>
  )
}
 
export default StatusBar;
 