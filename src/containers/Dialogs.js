import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {Dialogs} from "../components/index";

const DialogsContainer = ({dialogs, user}) => {
    const [filteredDialogs, setFilteredDialogs] = useState(Array.from(dialogs));
    const [inputVal, setInputVal] = useState('');

    const onInputChange = (value = "") => {
        setFilteredDialogs(
             dialogs.filter((dialog) => dialog.username.toLowerCase().indexOf(value.toLowerCase()) != -1)
        );
        setInputVal(value);
    }

    useEffect(() => {
        onInputChange();
    }, [dialogs]);


    return (
        <Dialogs onInputChange={onInputChange} dialogs={filteredDialogs} inputValue={inputVal} user={user} />
    )
}

export default connect(state => ({dialogs: state.dialogs.dialogs}))(DialogsContainer);