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

    const onInputChange = (value = "") => {
        if (dialogs.length > 0)
            setFilteredDialogs(
                dialogs.filter((dialog) => dialog.author.username.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
                dialog.partner.username.toLowerCase().indexOf(value.toLowerCase()) !== -1)
            );
        setInputVal(value);
    }


    useEffect(() => {
        if (user){
            store.dispatch(dialogsActions.fetchDialogs(user._id));

            socket.on("MESSAGES:NEW_MESSAGE", (data) => {
                store.dispatch(dialogsActions.fetchDialogs(user._id));
            })

            return () => socket.removeListener('SERVER:NEW_MESSAGE');
        }
        
    }, [user])

    useEffect(() => {
        onInputChange();
    }, [dialogs]);


    return (
        <Dialogs onInputChange={onInputChange} dialogs={filteredDialogs} inputValue={inputVal} currentDialogId={currentDialogId} user={user} />
    )
}

export default connect(state => ({dialogs: state.dialogs.dialogs, currentDialogId: state.dialogs.currentDialogId}))(DialogsContainer);