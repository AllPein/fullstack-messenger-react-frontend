import React from 'react';
import './DialogItem.scss'; 
import { Avatar, Divider } from 'antd';
const DialogItem = props => {
    const { text, username, time, _id, isRead, unRead, user, avatarColor } = props;
    const st = {
        "margin-top": "2px",
        "margin-bottom": "0px",
    }
    const txt = user._id == _id ? "Вы: " + text : text;
    
  return (
    <div className='dialogItem__container' id={unRead > 0 ? "dialogItem__container" : ""}>
        <div className="dialogItem__container-avatar">
            <Avatar
            style={{
                backgroundColor: avatarColor,
                verticalAlign: 'middle',
            }}
            size="large"
            >
                {username[0].toUpperCase()}
            </Avatar>
        </div>
        <div className="dialogItem__container-info">
            <div className="dialogItem__container-info__top">
                <b>{ username }</b>
                <span>{ time }</span>
            </div>
            <div className="dialogItem__container-info__bottom">
                <p>{  txt }</p>
                {unRead > 0 && 
                <h6>{ unRead }</h6>
                }
            </div>
            <Divider style={st} />
        </div>
    </div>
  )
}
 
export default DialogItem;
 