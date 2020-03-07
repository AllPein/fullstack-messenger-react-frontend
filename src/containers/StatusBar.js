import React from "react";
import { StatusBar } from "../components/index";
import { connect } from "react-redux";

const Status = ({ currentDialogId, user, dialogs }) => {
  if (!dialogs.length || !currentDialogId) {
    return null;
  }

  const currentDialog= dialogs.filter(
    dialog => dialog._id === currentDialogId
  )[0];


  let partner;

  if (currentDialog.author._id === user._id) {
    partner = currentDialog.partner;
  } else {
    partner = currentDialog.author;
  }

  return <StatusBar isOnline={true} partner={partner} />;
};

export default connect(({ dialogs, user }) => ({
  dialogs: dialogs.dialogs,
  currentDialogId: dialogs.currentDialogId,
  user: user.userData
}))(Status);