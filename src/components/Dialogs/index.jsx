import React from 'react'
import './Dialogs.scss' 
import { DialogItem } from "../index";
import { Input, Empty, Button } from 'antd';
const Dialogs = ({user, dialogs, onInputChange, inputValue, currentDialogId, isTyping, typingDialogIds, isEmpty, setIsVisible}) => {

  return (
    <div className='dialogs'>
      <Input.Search placeholder='Поиск..' onChange={e => onInputChange(e.target.value)} value={inputValue} size='large' />

      { dialogs.length > 0 && (
          dialogs.map((item) => (
          <DialogItem 
          key={item._id}
          text={item.lastMessage.text}
          isRead={item.lastMessage.isRead}
          unRead={item.count[user._id]}
          isTyping={isTyping && typingDialogIds.indexOf(item._id) !== -1}
          time={item.lastMessage.time}
          partner={item.partner._id === user._id ? item.author : item.partner}
          dialogId={item._id}
          currentDialogId={currentDialogId}
          id={item.lastMessage.user._id}
          user={user}
          />
        )) 
      )
      }
      {
        isEmpty ? (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} className='empty-box' description={
            <span>
              У вас нет диалогов
            </span>
          }
          >
            <Button type="primary" style={ {paddingTop: 5} } onClick={() => setIsVisible(true)} >Начать общение</Button> 
          </Empty>

        ): 
        dialogs.length == 0 &&
          (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} className='empty-box' description='Ничего не найдено' />

        )
      }
        
    </div>
    
  )
}
 
export default Dialogs;
 