import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.artic.edu/api/v1/',
  timeout: 10000,
  headers: {'X-Custom-Header': 'foobar'},
});

export default api;
