const initialState = {
    dialogs: [],
    currentDialogId: null
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
        default: 
            return state;
    }
}