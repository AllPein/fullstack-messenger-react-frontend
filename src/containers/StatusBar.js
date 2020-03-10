import React, { useEffect, useState } from "react";
import { StatusBar } from "../components/index";
import { connect } from "react-redux";

import socket from '../socket';

const Status = ({ currentDialogId, user, dialogs }) => {
  
  const [isTyping, setIsTyping] = useState(null);
  let typingtimeout = null;

  useEffect(() => {
    socket.on('DIALOGS:IS_TYPING', ({dialogId, uid}) => {
      if (uid != user._id) {
        toggleTypingUser();
      }
    })
  }, [])

  const toggleTypingUser = () => {
      setIsTyping(true);
      clearInterval(typingtimeout);
      typingtimeout = setTimeout(() => {
        setIsTyping(false);
      }, 500);
    
  }

  if (!dialogs.length || !currentDialogId) {
    return null;
  }

  const currentDialog = dialogs.filter(
    dialog => dialog._id === currentDialogId
  )[0];


  let partner;
  
  if (currentDialog.author._id === user._id) {
    partner = currentDialog.partner;
  } else {
    partner = currentDialog.author;
  }

  return <StatusBar partner={partner}  isTyping={isTyping} />;
};

export default connect(({ dialogs, user }) => ({
  dialogs: dialogs.dialogs,
  currentDialogId: dialogs.currentDialogId,
  user: user.userData
}))(Status);