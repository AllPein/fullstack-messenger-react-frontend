import React from 'react';
import './DialogItem.scss'; 
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import classNames  from 'classnames';
import { ReadIcon } from '../index';

import { Avatar, Divider } from 'antd';
const DialogItem = props => {
    const { text, time, partner, id, isTyping, isRead, user, dialogId, currentDialogId, unRead } = props;
    const st = {
        "marginTop": "2px",
        "marginBottom": "0px",
    }
    let isMe = user._id === id;
    let isSelected = currentDialogId === dialogId;


    const txt = isMe  ? "Вы: " + text : text;
    
  return (
    <Link to={`/im/${dialogId}`}>
        <div className={classNames('dialogItem__container', {
        'dialogItem__container-unread': unRead > 0,
        'dialogItem__container-selected': isSelected,
        })} >
            <div className={classNames('dialogItem__container-avatar', {
            'dialogItem__container-avatar__online': partner.isOnline})}>
                <Avatar
                style={{
                    backgroundColor: partner.avatarColor,
                    verticalAlign: 'middle',
                }}
                size="large"
                >
                    {partner.username[0].toUpperCase()}
                </Avatar>
            </div>
            <div className="dialogItem__container-info">
                <div className="dialogItem__container-info__top">
                    <b>{ partner.username }</b>
                    <span>{ format(new Date(time), 'HH:mm') }</span>
                </div>
                <div className="dialogItem__container-info__bottom">
                    {isTyping  ? (
                        <div className='dialogItem__container-info__bottom-typing'><p>печатает...</p></div>
                        
                    ) : (
                        <p>{ txt }</p> 
                           
                    )}
                    <ReadIcon 
                    isRead={isRead}
                    isMe={isMe}
                    color={isSelected ? 'w' : 'b'}
                    />
                </div>
                <Divider style={st} />
            </div>
        </div>
    </Link>
  )
}
 
export default DialogItem;
 