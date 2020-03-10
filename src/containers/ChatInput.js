import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import  socket  from '../socket';
import { messagesActions } from '../redux/actions/index';
import {ChatInput as  ChatInputBase} from "../components/index";

import store from '../redux/store';

const ChatInput = ({dialogId, user}) => {

    const [value, setValue] = useState('');

    const onChangeInput = (e) => {
        setValue(e.target.value);
        
    }

    const proceedTyping = (e) => {
        socket.emit("DIALOGS:TYPING", ({dialogId, uid: user._id}));

        if (e.keyCode === 13) {
            submitForm();
        }
    }

    const submitForm = () => {
        
        let data = {
            userId: user._id,
            text: value,
            dialogId: dialogId,
            time: new Date()
        }
        store.dispatch(messagesActions.sendMessage(data));
        setValue("");
    }

    return (
        <ChatInputBase onChangeInput={onChangeInput} proceedTyping={proceedTyping} value={value}  />
    )

}

export default connect(({dialogs}) => ({dialogId: dialogs.currentDialogId}))(ChatInput);