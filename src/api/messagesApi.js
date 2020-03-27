import axios from 'axios';

export default {
    getMessages: ({ dialogId, userId }) => axios.get(`https://react-messenger-backend.herokuapp.com/messages/${dialogId}/${userId}`),
    sendMessage: ({dialogId, userId, text, time}) => axios.post("https://react-messenger-backend.herokuapp.com/messages/" + dialogId, { userId, text, time }),
    deleteMessage: (messageId) => axios.delete("https://react-messenger-backend.herokuapp.com/messages/" + messageId)
};