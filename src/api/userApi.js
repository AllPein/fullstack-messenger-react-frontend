import axios from 'axios';


export default {
    login: (userData) => axios.post("https://react-messenger-backend.herokuapp.com/users/login", userData),
    register: (userData) => axios.post("https://react-messenger-backend.herokuapp.com/users/register", userData),
    getUserData: () => axios.get('https://react-messenger-backend.herokuapp.com/users/userinfo'),
    findUser: ({email, username}) => axios.post('https://react-messenger-backend.herokuapp.com/users/', { email, username })
};