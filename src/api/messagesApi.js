import axios from 'axios';

export default {
    
    getMessages: (dialogId) => axios.get("http://localhost:5000/messages/" + dialogId),
};