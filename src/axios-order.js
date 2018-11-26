import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://react-burger-f3e35.firebaseio.com/'
});

export default instance;