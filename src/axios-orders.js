import axios from 'axios';

const instance =  axios.create({
        baseURL: 'https://myburger-4a7a7.firebaseio.com/'
    });

export default instance;