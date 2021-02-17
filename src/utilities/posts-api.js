import axios from 'axios';

const API = axios.create({ baseURL: '/posts' });


API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPosts = () => API.get('/');
export const createPost = (newPost) => API.post('/', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/${id}`);
export const likePost = (id) => API.patch(`/${id}/likePost`);