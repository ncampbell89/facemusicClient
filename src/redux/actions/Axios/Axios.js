import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://facemusicserver.herokuapp.com',
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    timeout: 3600000 // 1 hour
});

export default Axios;
