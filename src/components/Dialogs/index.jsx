import React from 'react'
import './Dialogs.scss' 
import { DialogItem } from "../index";
import { Input, Empty } from 'antd';
const Dialogs = ({user, dialogs, onInputChange, inputValue, currentDialogId}) => {

  return (
    <div className='dialogs'>
      <Input.Search placeholder='Поиск..' onChange={e => onInputChange(e.target.value)} value={inputValue} size='large' />

      { dialogs.length > 0 ? (
          dialogs.map((item, i) => (
          <DialogItem 
          key={item._id}
          text={item.lastMessage.text}
          partner={item.partner._id == user._id ? item.author : item.partner}
          dialogId={item._id}
          currentDialogId={currentDialogId}
          id={item.lastMessage.user._id}
          user={user}
          />
        )) 
      )
      :
      (
        <Empty className='empty-box' description='Ничего не найдено' />
      )}
    </div>
    
  )
}
 
export default Dialogs;
 