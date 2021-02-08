import { FETCH_ALL } from "../constants/actionTypes";
import * as postAPI from '../../posts-api';

// Action Creators

// export const getPosts = () => async (dispatch) => {
//   try {
//     const { data } = await postAPI.fetchPosts();
//     dispatch({ type: FETCH_ALL, payload: data });
//   } catch (error) {
//     console.log(error.message)
//   }
// };

export const getPosts = () => async (dispatch) => {
  try{
    const { data } = await postAPI.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message)
  }
};