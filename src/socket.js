import io from 'socket.io-client';

const uid = localStorage.getItem("USER_ID");

const socket = io(`https://react-messenger-backend.herokuapp.com?id=${uid}`);

export default socket;