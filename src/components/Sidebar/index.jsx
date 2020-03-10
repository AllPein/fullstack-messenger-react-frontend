import React from 'react'
import { Button, Input, Modal, Avatar } from 'antd';
import {Dialogs} from '../../containers/index';
import { FormOutlined, SearchOutlined } from '@ant-design/icons';
import './Sidebar.scss';

const { TextArea } = Input;

const Sidebar = ({user, isVisible, setIsVisible, findUser, foundUser, sendFirstMessage, signOut}) => {
  return (
    <div className='chat__sidebar'>
      <div className='chat__sidebar-header'>
        <h1>Список диалогов </h1>
        <FormOutlined onClick={() => setIsVisible(true)} />
      </div>
      <div className="chat__sidebar-dialogs">
        <Dialogs user={user} />
        <Button block onClick={signOut}>Выйти</Button>
      </div>

      <div className="chat__sidebar-modal">

        <Modal
        title="Создать диалог" 
        visible={isVisible} 
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
        >
          <h3>Введите имя пользователя или e-mail собеседника</h3>
          <div className='chat__sidebar-modal__username'>
            <Input.Search  
              placeholder='Имя пользователя или e-mail...'
              onKeyPress={(event) => {
                  if (event.key === "Enter") {findUser(event)} 
              }} 
            >
            </Input.Search>
          </div>

          {foundUser ? 
          (
            <div>
              <div className="chat__sidebar-container">
                <div className="chat__sidebar-container-avatar">
                    <Avatar
                    style={{
                        backgroundColor: foundUser.avatarColor,
                        verticalAlign: 'middle',
                    }}
                    size="large"
                    >
                        {foundUser.username[0].toUpperCase()}
                    </Avatar>
                </div>
                <div className="chat__sidebar-container-info">
                    <div className="chat__sidebar-container-info__top">
                        <b>{ foundUser.username }</b>
                    </div>
                    <div className="chat__sidebar-container-info__bottom">
                        <p>{  foundUser.email }</p>
                    </div>
                </div>
              </div>
              
              <div className="chat__sidebar-messageField">
                  <h3>Отправьте пользователю {foundUser.username} первое сообщение</h3>
                  <TextArea 
                  placeholder='Напишите сообщение...'
                  onKeyPress={(event) => {
                      if (event.key === "Enter") {sendFirstMessage(event)} 
                  }} 
                  >
                  </TextArea>
              </div>     
            </div>
            
          
          ) 
          : 
          (<h3>Ничего не найдено</h3>)
          } 
        </Modal>
      </div>
    </div>
    
  )
}
 
export default Sidebar;
 