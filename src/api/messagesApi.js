import axios from 'axios';

export default {
    getMessages: ({ dialogId, userId }) => axios.get(`http://localhost:5000/messages/${dialogId}/${userId}`),
    sendMessage: ({dialogId, userId, text, time}) => axios.post("http://localhost:5000/messages/" + dialogId, { userId, text, time }),
    deleteMessage: (messageId) => axios.delete("http://localhost:5000/messages/" + messageId)
};