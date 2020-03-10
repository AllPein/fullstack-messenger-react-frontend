import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import store from '../redux/store';
import { userActions, dialogsActions } from '../redux/actions/index';
import { Sidebar } from "../components/index";
import socket from '../socket';

const SidebarContainer = props => {
    const { user, foundUser } = props; 

    const [isVisible, setIsVisible] = useState(false);


    const findUser = (event) => {
        let value = event.target.value;
        let data = { email: value, username: value };
        store.dispatch(userActions.findUser(data));
    }

    const sendFirstMessage = async (event) => {
        let text = event.target.value;
        let data = {
            userId: user._id,
            partnerId: foundUser._id,
            text: text, 
            time: new Date()
        }

        await store.dispatch(dialogsActions.createDialog(data));
        await setIsVisible(false);

    }

    const signOut = () => {
        store.dispatch(userActions.logOut());
    }

    return (
        <Sidebar 
            user={user}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            findUser={findUser}
            foundUser={foundUser}
            sendFirstMessage={sendFirstMessage}
            signOut={signOut}
        />
    )
}

export default connect( state => ({user: state.user.userData, foundUser: state.user.foundUser} ))(SidebarContainer);