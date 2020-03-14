import React from 'react'
import { Message } from '../index';
import { Spin } from 'antd';

import './Messages.scss'
const Messages = ({ messages, messagesRef, user, isLoading }) => {
  return (
    <div ref={messagesRef} className='messages'>
       {isLoading ? <Spin className='messages-loading' /> :
        messages.map((message, i) => (
            <Message 
            key={i}
            isMe={message.user._id === user._id}
            text={message.text}
            user={message.user}
            time={message.time}
            isRead={message.isRead}
            />
        ))
       }
    </div>
  )
}
 
export default Messages;
 