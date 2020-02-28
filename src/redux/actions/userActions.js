import { showNotification }  from '../../utils';
import { userApi } from "../../api";

import axios from 'axios';

const actions = {
    setUserData: (data) => ({
            type: 'USER:SET_DATA',
            payload: data
    }),
    logIn: (bool) => ({
        type: 'USER:SET_AUTH',
        payload: bool
    }),
    getUserData:  () => async dispatch => {
        try {
            let data = await userApi.getUserData();

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
            showNotification({
                title: 'Успешно',
                text: 'Вы зарегистрировались!',
                type: 'success'
            })

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
        
    }
}

export default actions;