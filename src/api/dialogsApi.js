import axios from 'axios';


export default {
    
    getDialogs: (userId) => axios.get("http://localhost:5000/dialogs/" + userId),
    createDialog: (data) => axios.post("http://localhost:5000/dialogs/", data)
};