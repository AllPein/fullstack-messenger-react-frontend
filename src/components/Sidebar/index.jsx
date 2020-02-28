import React from 'react'
import { Icon, Button, Modal, Select, Input, Form, Divider } from 'antd';
import {Dialogs} from '../index';

import './Sidebar.scss';

const { Option } = Select;
const { TextArea } = Input;

const Sidebar = ({user}) => {
  return (
    <div className='chat__sidebar'>
      <div className='chat__sidebar-header'>
        <h1>Список диалогов </h1>
        
      </div>
      <div className="chat__sidebar-dialogs">
        <Input placeholder='Поиск..' size='large' prefix={<Icon type='team'  />}></Input>
        <Dialogs user={user} />
      </div>
    </div>
    
  )
}
 
export default Sidebar;
 