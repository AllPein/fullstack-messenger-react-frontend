import React from 'react'
import { Message } from '../index';
import { Spin } from 'antd';

import './Messages.scss'
const Messages = ({ messages, messagesRef, user, isLoading, deleteMessage }) => {
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
            deleteMessage={deleteMessage.bind(this, message._id)}
            />
        ))
       }
    </div>
  )
}
 
export default Messages;
 