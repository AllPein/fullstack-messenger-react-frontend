import React from 'react';
import './DialogItem.scss'; 
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import classNames  from 'classnames';

import { Avatar, Divider } from 'antd';
const DialogItem = props => {
    const { text, time, partner, id, isRead, unRead, user, dialogId, currentDialogId } = props;
    const st = {
        "marginTop": "2px",
        "marginBottom": "0px",
    }
    const txt = user._id == id ? "Вы: " + text : text;
    
  return (
    <Link to={`/im/${dialogId}`}>
        <div className={classNames('dialogItem__container', {
        'dialogItem__container-unread': unRead > 0,
        'dialogItem__container-selected':currentDialogId == dialogId
        })} >
            <div className="dialogItem__container-avatar">
                <Avatar
                style={{
                    backgroundColor: partner.avatarColor,
                    verticalAlign: 'middle',
                }}
                size="large"
                >
                    {partner.username[0].toUpperCase()}
                </Avatar>
            </div>
            <div className="dialogItem__container-info">
                <div className="dialogItem__container-info__top">
                    <b>{ partner.username }</b>
                    <span>{ format(new Date(time), 'HH:mm') }</span>
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
    </Link>
  )
}
 
export default DialogItem;
 