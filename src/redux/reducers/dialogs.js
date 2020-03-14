const initialState = {
    dialogs: [],
    currentDialogId: window.location.pathname.split('/im/')[1]
}

export default (state = initialState, { type, payload }) => {
    switch(type){
        case 'DIALOGS:SET_DATA':
            return {
                ...state,
                dialogs: payload,
                
            };
        case 'DIALOGS:SET_CURRENT_DIALOG_ID':
            return {
                ...state,
                currentDialogId: payload
        }
        case "DIALOGS:UPDATE_IS_READ":
            return {
                ...state,
                dialogs: state.dialogs.map((dialog) => {
                    if (dialog._id === payload.dialogId) {
                        dialog.lastMessage.isRead = true;
                    }
                    return dialog;
                })
            }
        default: 
            return state;
    }
}