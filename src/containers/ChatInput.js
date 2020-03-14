import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import  socket  from '../socket';
import { messagesActions } from '../redux/actions/index';
import {ChatInput as  ChatInputBase} from "../components/index";

import store from '../redux/store';

const ChatInput = ({dialogId, user}) => {

    const [value, setValue] = useState('');
    const [isVisibleEmojis, setIsVisibleEmojis] = useState(false);

    const toggleEmojis = () => {
        setIsVisibleEmojis(!isVisibleEmojis);
    }


    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

 

    const addEmoji = (e) => {
        socket.emit("DIALOGS:TYPING", ({dialogId, uid: user._id}));
        setValue(value + e.native);
    }

    const proceedTyping = (e) => {
        socket.emit("DIALOGS:TYPING", ({dialogId, uid: user._id}));

        if (e.keyCode === 13) {
            sendMessage();
        }
    }
    const handleOutsideClick = (el, e) => {
        const el2 = document.querySelector('.emoji-picker');
        if (el && el2 && !el.contains(e.target) && !el2.contains(e.target)) {
            setIsVisibleEmojis(false);
        }
      };
    const sendMessage = () => {
        
        let data = {
            userId: user._id,
            text: value,
            dialogId: dialogId,
            time: new Date()
        }
        store.dispatch(messagesActions.sendMessage(data));
        setValue("");
        setIsVisibleEmojis(false);
    }


    useEffect(() => {
            const el = document.querySelector('.smile-btn');
            document.addEventListener('click', handleOutsideClick.bind(this, el));
            return () => { document.removeEventListener('click', handleOutsideClick.bind(this, el)) };
        
        
    }, [])

    return (
        <ChatInputBase
        addEmoji={addEmoji} 
        onChangeInput={onChangeInput}
        proceedTyping={proceedTyping} 
        value={value} 
        sendMessage={sendMessage} 
        toggleEmojis={toggleEmojis}
        isVisibleEmojis={isVisibleEmojis}
        />
    )

}

export default connect(({dialogs}) => ({dialogId: dialogs.currentDialogId}))(ChatInput);