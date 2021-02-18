import { AUTH } from "../constants/actionTypes";
import * as userAPI from '../../users-api';

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await userAPI.signIn(formData);
    dispatch({ type: AUTH, data });

    history.push('/');
  } catch (error) {
    console.log(error);
  };
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await userAPI.signUp(formData);
    dispatch({ type: AUTH, data });

    history.push('/');
  } catch (error) {
    console.log(error);
  };
};