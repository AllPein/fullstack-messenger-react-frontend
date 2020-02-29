import React from 'react'
import { Button, Input } from 'antd';
import {Dialogs} from '../../containers/index';

import './Sidebar.scss';



const Sidebar = ({user}) => {
  return (
    <div className='chat__sidebar'>
      <div className='chat__sidebar-header'>
        <h1>Список диалогов </h1>
        
      </div>
      <div className="chat__sidebar-dialogs">
        <Dialogs user={user} />
      </div>
    </div>
    
  )
}
 
export default Sidebar;
 