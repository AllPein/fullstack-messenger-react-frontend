import React from 'react'
import { Input, Form } from 'antd';
import { SendOutlined, SmileOutlined } from '@ant-design/icons';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

const ChatInput = ({value, onChangeInput, proceedTyping, sendMessage, isVisibleEmojis, toggleEmojis, addEmoji}) => {
  const styles = {
    emojiPicker: {
      position: "absolute",
      bottom: 50,
      left: 320,
      zIndex: 999,
      cssFloat: "left",
      marginLeft: "200px"
    }
  }
  return (
    <div>
      <Input
      suffix={<SendOutlined style={{ fontSize: '20px' }} onClick={sendMessage} />}
      prefix={<SmileOutlined className='smile-btn' onClick={toggleEmojis} />}
      size='large'
      onChange={e => { onChangeInput(e)}}
      onKeyDown={proceedTyping}
      
      placeholder="Введите текст сообщения…"
      value={value}
      />
    {isVisibleEmojis &&
    <span style={styles.emojiPicker} className='emoji-picker' >
      <Picker 
      
      onSelect={addEmoji}
      set='apple'
      /> 
    </span>
      
    }
    
    </div>
  )
}
 
export default ChatInput;
 