import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPost = (id) => axios.get(`${url}/${id}`);
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const countPost = (id,countPost) => axios.patch(`${url}/${id}` , countPost);