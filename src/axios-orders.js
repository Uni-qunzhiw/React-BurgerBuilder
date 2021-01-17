import axios from 'axios';

const instance = axios.create({
    baseURL:  "https://react-my-burger-e0c74-default-rtdb.firebaseio.com/"
})

export default instance;