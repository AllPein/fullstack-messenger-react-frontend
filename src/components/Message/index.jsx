import React from 'react'
import { Avatar, Popover, Button} from 'antd';
import classNames from 'classnames';
import { ReadIcon } from '../index';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';


import './Message.scss';

const Message = ({ isMe, text,  time, user, isRead, deleteMessage }) => {
  return (
    <div className={classNames('message__container', {
    'message__container-isme' : isMe
    })}>
        <Popover
          placement={!isMe ? "topLeft" : "topRight"}
          content={<Button disabled={!isMe} onClick={deleteMessage}>Удалить сообщение</Button>}
          trigger="click">
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
                    <ReadIcon isMe={isMe} isRead={isRead} color='b' />
                    <span>{ formatDistanceToNow(new Date(time),  {locale: ruLocale, addSuffix: true } ) }</span>
                </div>
            </div>
        </div>
        </Popover>
    </div>
  )
}
 
export default Message;
 