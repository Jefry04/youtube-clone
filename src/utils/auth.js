import axios from 'axios';

const url = process.env.REACT_APP_BACKEND_URI;

export const register = async (body) => {
  try {
    const response = await axios.post(`${url}users/signup`, body);
    return response;
  } catch (error) {
    return error?.response;
  }
};

export const authUser = async ({ email, password }) => {
  try {
    const response = await axios.post(`${url}users/signin`, {
      email,
      password,
    });
    return response;
  } catch (error) {
    return error?.response;
  }
};
