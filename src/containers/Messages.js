import React, {  useEffect, useRef, useState } from 'react';
import {Messages} from "../components/index";
import { connect } from 'react-redux';
import store from '../redux/store';
import socket from '../socket';
import {messagesActions} from '../redux/actions/index';

const MessagesContainer = ({messages, dialogId, user}) => {
    const [isLoading, setisLoading] = useState(false);
    const messagesRef = useRef(null);
    
    const handleNewMessage = (data) => {
        if (dialogId === data.dialogId) {
            socket.emit('MESSAGES:UPDATE_READ', ({ dialogId: data.dialogId, userId: user._id }));
        }
        store.dispatch(messagesActions.addMessage(data));
    }

    const updateIsRead = ({userId, dialogId}) => {
        store.dispatch(messagesActions.updateIsRead({userId, dialogId}));
    } 

    useEffect(() => {
        messagesRef.current.scrollTo(0, 999999);
    }, [messages]);

    useEffect(() => {
        if (dialogId && user) {
            async function fetchData(){
                setisLoading(true);
                await store.dispatch(messagesActions.fetchMessages({dialogId, userId: localStorage.getItem("USER_ID")}));
                await setisLoading(false);
                await messagesRef.current.scrollTo(0, 999999);
            }
            
            fetchData();
            socket.on("MESSAGES:NEW_MESSAGE", handleNewMessage);

            socket.on("MESSAGES:UPDATE_IS_READ", updateIsRead);
        }
        
        return () =>  {
            socket.removeListener('MESSAGES:NEW_MESSAGE', handleNewMessage); 
        }

    }, [dialogId, user]);


    return (
        <Messages 
        messages={messages}
        messagesRef={messagesRef} 
        user={user}
        isLoading={isLoading} 
        />
    )
}

export default connect(({messages, dialogs, user}) => ({messages: messages.messages, dialogId: dialogs.currentDialogId, user: user.userData}))(MessagesContainer);