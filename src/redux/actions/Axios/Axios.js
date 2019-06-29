import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://practical-fermat-c9cbd0.netlify.com',
    timeout: 3600000 // 1 hour
});

export default Axios;
