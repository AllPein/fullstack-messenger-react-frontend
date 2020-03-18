import { messagesApi } from "../../api";


let actions = {
    setMessages: (data) => ({
        type: 'MESSAGES:SET_DATA',
        payload: data
    }),
    addMessage: (data) => ({
        type: 'MESSAGES:ADD_MESSAGE',
        payload: data
    }),
    fetchMessages: ({ dialogId, userId }) => async dispatch => {
        try {
            if (dialogId ){

                let data = await messagesApi.getMessages({ dialogId, userId });
                dispatch(actions.setMessages(data.data));
            }
            
        }
        catch(err){
            console.log(err);
        }
    },
    sendMessage: ({ dialogId, userId, text, time }) =>  dispatch => {
        messagesApi.sendMessage({ dialogId, userId, text, time });
    },
    deleteMessage: (messageId) => async dispatch => {
        messagesApi.deleteMessage(messageId);
    },
    updateIsRead: ({userId, dialogId}) => dispatch => {
        if (userId){
            dispatch({
                type: 'MESSAGES:UPDATE_IS_READ',
                payload: { userId, dialogId }
            })
        }
        
    }
}

export default actions;