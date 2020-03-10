import React, {  useEffect, useRef, useState } from 'react';
import {Messages} from "../components/index";
import { connect } from 'react-redux';
import store from '../redux/store';
import socket from '../socket';
import {messagesActions} from '../redux/actions/index';

const MessagesContainer = ({messages, dialogId, user}) => {
    const messagesRef = useRef(null);
    
    const handleNewMessage = (data) => {
        store.dispatch(messagesActions.addMessage(data));
    }

    useEffect(() => {
        messagesRef.current.scrollTo(0, 999999);
    }, [messages]);

    useEffect(() => {
        if (dialogId) {
            store.dispatch(messagesActions.fetchMessages(dialogId));
        
        
            socket.on("MESSAGES:NEW_MESSAGE", handleNewMessage);

        }
        return () =>  socket.removeListener('MESSAGES:NEW_MESSAGE', handleNewMessage); 

    }, [dialogId]);


    return (
        <Messages messages={messages} messagesRef={messagesRef} user={user} />
    )
}

export default connect(({messages, dialogs, user}) => ({messages: messages.messages, dialogId: dialogs.currentDialogId, user: user.userData}))(MessagesContainer);