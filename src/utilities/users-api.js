import axios from 'axios';

console.log(process.env.DATABASE_URL);

const API = axios.create({ baseURL: '/users' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const signIn = (formData) => API.post('/signin', formData);
export const signUp = (formData) => API.post('/signup', formData);