import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {Dialogs} from "../components/index";
import  socket  from '../socket';
import store from '../redux/store';
import {dialogsActions} from '../redux/actions/index';

const DialogsContainer = props => {

    const {dialogs, user, currentDialogId} = props;

    const [filteredDialogs, setFilteredDialogs] = useState(Array.from(dialogs));
    const [inputVal, setInputVal] = useState('');
    const [isTyping, setIsTyping] = useState(null);
    const [typingDialogId, setTypingDialogId] = useState(null);
    let typingtimeout = null;

    const onInputChange = (value = "") => {
        if (dialogs.length > 0)
            setFilteredDialogs(
                dialogs.filter((dialog) => dialog.author.username.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
                dialog.partner.username.toLowerCase().indexOf(value.toLowerCase()) !== -1)
            );
        setInputVal(value);
    }

    const toggleTypingUser = (dialogId) => {
        setTypingDialogId(dialogId);
        setIsTyping(true);
        clearInterval(typingtimeout);
        typingtimeout = setTimeout(() => {
          setIsTyping(false);
        }, 500);
      
    }

    useEffect(() => {
        if (user){
            store.dispatch(dialogsActions.fetchDialogs(user._id));

            socket.on("MESSAGES:NEW_MESSAGE", () => {
                store.dispatch(dialogsActions.fetchDialogs(user._id));
            })

            socket.on('DIALOGS:IS_TYPING', ({uid, dialogId}) => {
                if (uid != user._id) {
                  toggleTypingUser(dialogId);
                }
              })   
        }
    }, [user])

    useEffect(() => {
        onInputChange();
    }, [dialogs]);


    return (
        <Dialogs 
        typingDialogId={typingDialogId}
        onInputChange={onInputChange}
        dialogs={filteredDialogs}
        inputValue={inputVal}
        currentDialogId={currentDialogId} 
        user={user} 
        isTyping={isTyping} 
        />
    )
}

export default connect(state => ({dialogs: state.dialogs.dialogs, currentDialogId: state.dialogs.currentDialogId}))(DialogsContainer);