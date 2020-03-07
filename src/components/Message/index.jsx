import React from 'react'
import { Avatar } from 'antd';
import classNames from 'classnames';

import './Message.scss';

const Message = ({ isMe, text,  time, user}) => {
  return (
    <div className={classNames('message__container', {
    'message__container-isme' : isMe
    })}>
        <div className="message__container-content">
            <div className='message__container-content__avatar'>
                <Avatar
                style={{
                    backgroundColor: user.avatarColor,
                    verticalAlign: 'middle',
                }}
                size={30}
                >
                    {user.username[0].toUpperCase()}
                </Avatar>
            </div>
            <div className="message__container-content__info">
                <div className="message__container-content__info-text">
                    <p>{  text }</p>
                </div>
                <div className="message__container-content__info-time">
                    <span>{ time }</span>
                </div>
            </div>
        </div>
        
    </div>
  )
}
 
export default Message;
 