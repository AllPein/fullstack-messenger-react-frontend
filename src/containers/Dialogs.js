import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {Dialogs} from "../components/index";
import  socket  from '../socket';
import store from '../redux/store';
import {dialogsActions} from '../redux/actions/index';

const DialogsContainer = props => {

    const {dialogs, user, currentDialogId, setIsVisible} = props;

    const [filteredDialogs, setFilteredDialogs] = useState(Array.from(dialogs));
    const [inputVal, setInputVal] = useState('');
    const [isTyping, setIsTyping] = useState(null);
    const [typingDialogIds, setTypingDialogIds] = useState([]);
    let typingtimeout = null;

    let isEmpty = dialogs.length == 0;

    const onInputChange = (value = "") => {
        if (dialogs.length > 0)
            setFilteredDialogs(
                dialogs.filter((dialog) => dialog.author.username.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
                dialog.partner.username.toLowerCase().indexOf(value.toLowerCase()) !== -1)
            );
        setInputVal(value);
    }

    const handleTypingUser = (dialogId) => {
        setTypingDialogIds([...typingDialogIds, dialogId]);
        setIsTyping(true);
        clearInterval(typingtimeout);
        typingtimeout = setTimeout(() => {
          setIsTyping(false);
          setTypingDialogIds([]);
        }, 500);
      
    }

    const updateIsRead = ({userId, dialogId}) => {
        store.dispatch(dialogsActions.updateIsRead({userId, dialogId}));
    } 

    useEffect(() => {
        if (user){
            store.dispatch(dialogsActions.fetchDialogs(user._id));

            socket.on("MESSAGES:NEW_MESSAGE", () => {
                store.dispatch(dialogsActions.fetchDialogs(user._id));
            })

            socket.on("DIALOGS:DIALOG_CREATED", () => {
                store.dispatch(dialogsActions.fetchDialogs(user._id));
            })

            socket.on('DIALOGS:IS_TYPING', ({uid, dialogId}) => {
                
                handleTypingUser(dialogId);
            })
            
            socket.on("MESSAGES:UPDATE_IS_READ", updateIsRead);

        }

        return () =>  {
            socket.removeListener('MESSAGES:NEW_MESSAGE');
            socket.removeListener('DIALOGS:DIALOG_CREATED');
            socket.removeListener('DIALOGS:IS_TYPING'); 
            socket.removeListener("MESSAGES:UPDATE_IS_READ", updateIsRead);
        }
    }, [user])

    useEffect(() => {
        onInputChange();
    }, [dialogs]);


    return (
        <Dialogs
        setIsVisible={setIsVisible}
        isEmpty={isEmpty} 
        typingDialogIds={typingDialogIds}
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