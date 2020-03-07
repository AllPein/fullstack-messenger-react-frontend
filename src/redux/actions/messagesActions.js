import { messagesApi } from "../../api";


let actions = {
    setMessages: (data) => ({
        type: 'MESSAGES:SET_DATA',
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
    }
}

export default actions;