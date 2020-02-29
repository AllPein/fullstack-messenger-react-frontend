import React, { useState, useEffect, useRef } from 'react';
import {Messages} from "../components/index";
import { connect } from 'react-redux';

const MessagesContainer = ({messages}) => {
    const messagesRef = useRef(null);
    
    useEffect(() => {
        messagesRef.current.scrollTo(0, 999999);
    }, [messages]);


    return (
        <Messages messages={messages} messagesRef={messagesRef} />
    )
}

export default connect(state => ({messages: state.messages.messages}))(MessagesContainer);