import React from 'react'
import './Dialogs.scss' 
import { DialogItem } from "../index";

const Dialogs = ({user}) => {
  const items = [
    {
      text: "asd",
      username: "Sasha",
      time: "14:42",
      unRead: 2,

    },
    {
      text: "sssssss",
      username: "Kolya",
      time: "11:20",
      unRead: 0
    },
    {
      text: "sssssss",
      username: "Kolya",
      time: "11:20",
      unRead: 0
    },
    {
      text: "sssssss",
      username: "Kolya",
      time: "11:20",
      unRead: 0
    },
    {
      text: "sssssss",
      username: "Kolya",
      time: "11:20",
      unRead: 0
    },
    {
      text: "sssssss",
      username: "Kolya",
      time: "11:20",
      unRead: 0
    },
    {
      text: "sssssss",
      username: "Kolya",
      time: "11:20",
      unRead: 0
    },
    {
      text: "sssssss",
      username: "Kolya",
      time: "11:20",
      unRead: 0
    },
    {
      text: "sssssss",
      username: "Kolya",
      time: "11:20",
      unRead: 0
    },
    {
      text: "sssssss",
      username: "Kolya",
      time: "11:20",
      unRead: 0
    },
    {
      text: "sssssss",
      username: "Kolya",
      time: "11:20",
      unRead: 0
    },
    {
      text: "sssssss",
      username: "Kolya",
      time: "11:20",
      unRead: 0
    },
    {
      text: "sssssss",
      username: "Kolya",
      time: "11:20",
      unRead: 0
    },
    {
      text: "sssssss",
      username: "Kolya",
      time: "11:20",
      unRead: 0
    },
    {
      text: "sssssss",
      username: "Kolya",
      time: "11:20",
      unRead: 0
    },
    
    {
      text: "fffffff",
      username: "Arthur",
      time: "14:42",
      unRead: 0
    },
    {
      text: "sssssssssssssss",
      username: "Lesha",
      time: "13:11",
      unRead: 11
    }

  ]
  return (
    <div className='dialogs'>
      { items.map(item => (
        <DialogItem 
        text={item.text}
        username={item.username}
        time={item.time}
        unRead={item.unRead}
        avatarColor={item.avatarColor}
        user={user}
        />
      )) }
    </div>
    
  )
}
 
export default Dialogs
 