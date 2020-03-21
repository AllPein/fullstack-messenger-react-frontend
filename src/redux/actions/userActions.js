import { showNotification }  from '../../utils';
import { userApi } from "../../api";
import socket from '../../socket';
import axios from 'axios';

const actions = {
    setUserData: (data) => ({
        type: 'USER:SET_DATA',
        payload: data
    }),
    setFoundUser: (data) => ({
        type: 'USER:SET_FOUND_USER',
        payload: data
    }),
    logIn: (bool) => ({
        type: 'USER:SET_AUTH',
        payload: bool
    }),
    getUserData:  () => async dispatch => {
        try {
            let data = await userApi.getUserData();
            localStorage.setItem("USER_ID", data.data._id);
            dispatch(actions.setUserData(data));
        }
        catch(err) {
                dispatch(actions.logIn(false));
                delete localStorage.token;
            
        }
    },

    authUser:  (userData) => async dispatch => {
        try {
            let response = await userApi.login(userData);
            let token = await response.data["token"];
            localStorage.setItem("token", token);
            axios.defaults.headers.common['Authorization'] = token;
            
            showNotification({
                title: 'Готово',
                text: 'Вы авторизировались!',
                type: 'success'
            })
            
            socket.connect();
            dispatch(actions.getUserData());
            dispatch(actions.logIn(true));

        }
        catch(err) {
            if (err) {
                showNotification({
                    title: 'Ошибка',
                    text: 'Неверный логин или пароль!',
                    type: 'error'
                })
            }   
            
        }
    },

    registerUser:  (userData) => async dispatch => {
        try {
            let response = await userApi.register(userData);
            let token = await response.data["token"];
    
            localStorage.setItem("token", token);
            axios.defaults.headers.common['Authorization'] = token;
            
            dispatch(actions.authUser({ email: userData.email, password: userData.password }));
            dispatch(actions.logIn(true));

            return 'success';
        }
       catch(err){
            showNotification({
                title: 'Ошибка',
                text: 'Произошла ошибка!',
                type: 'error'
            })
            dispatch(actions.logIn(false));

            return 'error';
       } 
        
    },
    logOut: () => async dispatch =>{
        localStorage.removeItem("token");
        localStorage.removeItem("USER_ID");
        socket.disconnect();

        dispatch(actions.setUserData({data:{}}));
        dispatch(actions.logIn(false));
    },
    findUser: ({email, username}) => async dispatch => {
        let foundUser = await userApi.findUser({ email, username });

        let data = foundUser.data.length > 0 ? foundUser.data[0]: null;
        dispatch(actions.setFoundUser(data));
    }
}

export default actions;