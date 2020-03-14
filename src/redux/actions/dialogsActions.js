import { dialogsApi } from "../../api";
import { showNotification } from "../../utils";


let actions = {
    setDialogs: (data) => ({
        type: 'DIALOGS:SET_DATA',
        payload: data
    }),

    fetchDialogs:  (userId) => async dispatch => {
        try {
            if (userId){
                let data = await dialogsApi.getDialogs(userId);
                dispatch(actions.setDialogs(data.data));
            }
            
        }
        catch(err){
            console.log(err);
        }
    },
    updateIsRead: ({userId, dialogId}) => async dispatch => {
        try {
            if (userId){
                dispatch({
                    type: 'DIALOGS:UPDATE_IS_READ',
                    payload: { userId, dialogId }
                })
            }
            
        }
        catch(err){
            console.log(err);
        }
    },
    createDialog: ({ userId, partnerId, text, time }) => async dispatch => {
        try {
            if (userId){
                await dialogsApi.createDialog({userId, partnerId, text, time});
            }
        }
        catch(err){
            showNotification({
                title: 'Ошибка',
                text: 'Такой диалог уже существует!',
                type: 'error'
            })
        }
    },
    setCurrentDialogId: (id) => dispatch => {
        dispatch({
            type: 'DIALOGS:SET_CURRENT_DIALOG_ID',
            payload: id,
        });
        return id;
    }
}

export default actions;