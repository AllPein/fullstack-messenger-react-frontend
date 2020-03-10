import io from 'socket.io-client';

const uid = localStorage.getItem("USER_ID");

const socket = io(`http://localhost:5000?id=${uid}`);

export default socket;