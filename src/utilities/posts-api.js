import axios from 'axios';

const BASE_URL = 'http://localhost:3001/posts';

export const fetchPosts = () => axios.get(BASE_URL);