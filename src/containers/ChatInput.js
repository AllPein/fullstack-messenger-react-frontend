import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { socket } from '../socket';
import { messagesActions } from '../redux/actions/index';
import {ChatInput as  ChatInputBase} from "../components/index";

import store from '../redux/store';

const ChatInput = ({dialogId, user}) => {

    const [value, setValue] = useState('');

    const onChangeInput = ({ target: { value } }) => {
        setValue(value);
    }
    const submitForm = (e) => {
        let data = {
            userId: user._id,
            text: value,
            dialogId: dialogId,
            time: new Date()
        }
        store.dispatch(messagesActions.sendMessage(data));
        setValue("");
        e.preventDefault();
    }

    return (
        <ChatInputBase submitForm={submitForm} onChangeInput={onChangeInput} value={value}  />
    )

}

export default connect(({dialogs}) => ({dialogId: dialogs.currentDialogId}))(ChatInput);