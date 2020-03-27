import axios from 'axios';


export default {
    
    getDialogs: (userId) => axios.get("https://react-messenger-backend.herokuapp.com/dialogs/" + userId),
    createDialog: (data) => axios.post("https://react-messenger-backend.herokuapp.com/dialogs/", data)
};