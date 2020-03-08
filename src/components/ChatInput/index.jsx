import React from 'react'
import { Input, Form } from 'antd';
import EmojiPicker from 'emoji-picker-react';

const { TextArea } = Input;

const ChatInput = ({submitForm, value, onChangeInput}) => {
  return (
    <Input
    onChange={onChangeInput}
    onKeyPress={(event) => {
        if (event.key === "Enter") {submitForm(event)} 
    }}
    placeholder="Введите текст сообщения…"
    value={value}
    
  />
    
  )
}
 
export default ChatInput;
 