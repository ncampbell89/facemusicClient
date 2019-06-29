import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://facemusicserver.herokuapp.com',
    // baseURL: 'https://musing-lamport-e5b378.netlify.com',
    timeout: 3600000 // 1 hour
});

export default Axios;
