import axios from 'axios';

export default {
    getMessages: (dialogId) => axios.get("http://localhost:5000/messages/" + dialogId),
    sendMessage: ({dialogId, userId, text, time}) => axios.post("http://localhost:5000/messages/" + dialogId, { userId, text, time })
};