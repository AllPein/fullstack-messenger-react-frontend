import React from 'react'
import { Message } from '../index';

const Messages = ({messages, messagesRef}) => {
  return (
    <div ref={messagesRef} className='messages'>
       {messages.map((a) => (
           <Message 
            isMe={a.isMe}
            text={a.text}
            user={a.user}
            time={a.time}
           />
       ))}
    </div>
  )
}
 
export default Messages;
 