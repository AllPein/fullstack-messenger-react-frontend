import { dialogsApi } from "../../api";


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
    createDialog: ({ userId, partnerId, text, time }) => async dispatch => {
        try {
            if (userId){
                await dialogsApi.createDialog({userId, partnerId, text, time});
                await dispatch(actions.fetchDialogs(userId));
            }
        }
        catch(err){
            console.log(err);
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