import axios from 'axios';

console.log(process.env.REACT_APP_API_KEY);
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

export default instance;
