const initialState = {
    messages: [],
    
}

export default (state = initialState, { type, payload }) => {
    switch(type){
        case 'MESSAGES:SET_DATA':
            return {
                ...state,
                messages: payload,
                
            };
        case 'MESSAGES:ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, payload],
                
        };
        case 'MESSAGES:UPDATE_IS_READ':
            return {
                ...state,
                messages: state.messages.map((message) => {
                    if (message.dialogId === payload.dialogId && message.user._id !== payload.userId) {
                        message.isRead = true;
                    }
                    return message;
                })
                
        };     
        default: 
            return state;
    }
}