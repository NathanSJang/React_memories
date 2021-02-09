import axios from 'axios';

const BASE_URL = 'http://localhost:3001/posts';

export const fetchPosts = () => axios.get(BASE_URL);
export const createPost = (newPost) => axios.post(BASE_URL, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${BASE_URL}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${BASE_URL}/${id}`);
export const likePost = (id) => axios.patch(`${BASE_URL}/${id}/likePost`);