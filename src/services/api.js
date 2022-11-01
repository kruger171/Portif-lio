import axios from 'axios';
// api https://api.themoviedb.org/3/
// api movie/550?api_key=684187a736e15c2ad2d7c0c5485b54ba
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',

});

export default api;