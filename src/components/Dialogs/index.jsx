import React from 'react'
import './Dialogs.scss' 
import { DialogItem } from "../index";
import { Input, Empty } from 'antd';
const Dialogs = ({user, dialogs, onInputChange, inputValue}) => {

  return (
    <div className='dialogs'>
      <Input.Search placeholder='Поиск..' onChange={e => onInputChange(e.target.value)} value={inputValue} size='large' />

      { dialogs.length > 0 ? (
          dialogs.map(item => (
          <DialogItem 
          text={item.text}
          username={item.username}
          time={item.time}
          unRead={item.unRead}
          avatarColor={item.avatarColor}
          user={user}
          />
        )) 
      )
      :
      (
        <Empty  description='Ничего не найдено' />
      )}
    </div>
    
  )
}
 
export default Dialogs;
 