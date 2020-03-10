import React from 'react'
import { Input, Form } from 'antd';
import EmojiPicker from 'emoji-picker-react';

const { TextArea } = Input;

const ChatInput = ({value, onChangeInput, proceedTyping}) => {
  return (
    <Input
    onChange={e => { onChangeInput(e)}}
    onKeyDown={proceedTyping}
    placeholder="Введите текст сообщения…"
    value={value}
    
  />
    
  )
}
 
export default ChatInput;
 