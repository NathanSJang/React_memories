import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes";
import * as postAPI from '../../posts-api';

// Action Creators

export const getPosts = () => async (dispatch) => {
  try{
    const { data } = await postAPI.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try{
    const { data } = await postAPI.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try{
    const { data } = await postAPI.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message)
  }
};

export const deletePost = (id) => async (dispatch) => {
  try{
    await postAPI.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message)
  }
};
export const likePost = (id) => async (dispatch) => {
  try{
    const { data } = await postAPI.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message)
  }
};