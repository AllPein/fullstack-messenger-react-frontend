import React, { useEffect, useState } from "react";
import { StatusBar } from "../components/index";
import { connect } from "react-redux";

import socket from '../socket';

const Status = ({ currentDialogId, user, dialogs }) => {
  
  const [isTyping, setIsTyping] = useState(null);
  const [typingDialogIds, setTypingDialogIds] = useState([]);
  let typingtimeout = null;

  const handleTypingUser = (dialogId) => {
    setTypingDialogIds([...typingDialogIds, dialogId]);
    setIsTyping(true);
    clearInterval(typingtimeout);
    typingtimeout = setTimeout(() => {
      setIsTyping(false);
      setTypingDialogIds([]);
    }, 500);
    
  }
  
  useEffect(() => {
    socket.on('DIALOGS:IS_TYPING', ({dialogId, uid}) => {
      if (uid !== user._id) {
        handleTypingUser(dialogId);
      }
    })

    return () => socket.removeEventListener('DIALOGS:IS_TYPING'); 
  }, [user])

  

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

  return <StatusBar partner={partner}  isTyping={isTyping} typingDialogIds={typingDialogIds} currentDialogId={currentDialogId} />;
};

export default connect(({ dialogs, user }) => ({
  dialogs: dialogs.dialogs,
  currentDialogId: dialogs.currentDialogId,
  user: user.userData
}))(Status);