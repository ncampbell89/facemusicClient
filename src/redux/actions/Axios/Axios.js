import axios from 'axios';

const Axios = axios.create({
    // baseURL: 'https://practical-fermat-c9cbd0.netlify.com',
    baseURL: 'http://facespotifymusic.com',
    // baseURL: 'http://localhost:3001',
    timeout: 3600000 // 1 hour
});

export default Axios;
