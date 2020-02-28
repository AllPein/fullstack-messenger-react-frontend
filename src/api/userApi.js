import axios from 'axios';


export default {
    login: (userData) => axios.post("http://localhost:5000/users/login", userData),
    register: (userData) => axios.post("http://localhost:5000/users/register", userData),
    getUserData: () => axios.get('http://localhost:5000/users/userinfo')
};