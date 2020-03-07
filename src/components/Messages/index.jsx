import React from 'react'
import { Message } from '../index';

const Messages = ({messages, messagesRef, user}) => {
  return (
    <div ref={messagesRef} className='messages'>
       {messages.map((message, i) => (
           <Message 
            key={i}
            isMe={message.user._id == user._id}
            text={message.text}
            user={message.user}
            time={message.time}
           />
       ))}
    </div>
  )
}
 
export default Messages;
 