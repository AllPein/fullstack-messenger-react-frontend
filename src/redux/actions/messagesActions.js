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
    fetchMessages: (dialogId) => async dispatch => {
        try {
            if (dialogId){
                let data = await messagesApi.getMessages(dialogId);
                dispatch(actions.setMessages(data.data));
            }
            
        }
        catch(err){
            console.log(err);
        }
    },
    sendMessage: ({ dialogId, userId, text, time }) =>  dispatch => {
        messagesApi.sendMessage({ dialogId, userId, text, time });
    }
}

export default actions;