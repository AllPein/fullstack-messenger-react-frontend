import React from 'react'
import ReadWhiteSvg from '../../assets/ReadWhite.svg';
import ReadBlueSvg from '../../assets/ReadBlue.svg';
import SentWhiteSvg from '../../assets/SentWhite.svg';
import SentBlueSvg from '../../assets/SentBlue.svg';


const ReadIcon = ({isMe, isRead, color}) => {
  return (
    <div>
        { isMe && isRead ? (
          <img className='dialogItem__container-info__bottom-read' src={color === 'w' ? ReadWhiteSvg : ReadBlueSvg} alt=""/>
        ) : (
          isMe &&
          <img className='dialogItem__container-info__bottom-unread'  src={color === 'w' ? SentWhiteSvg : SentBlueSvg} alt=""/>
        )
        }
    </div>
  )
}
 
export default ReadIcon;
 