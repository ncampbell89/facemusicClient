import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://facemusicserver.herokuapp.com/',
    // baseURL: 'http://localhost:3001',
    timeout: 3600000 // 1 hour
});

export default Axios;
