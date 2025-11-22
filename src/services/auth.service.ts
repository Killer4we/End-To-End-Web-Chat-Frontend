import axios from "axios";

const API_URL = "http://localhost:3000/api/auth"; 

export const signupUser = async (username: string, email: string, password: string) => {
  const res = await axios.post(`${API_URL}/signup`, {
    username,
    email,
    password,
  });
  return res.data;
};

export const loginUser = async (email: string, password: string) => {
  const res = await axios.post(`${API_URL}/login`, {
    email,
    password,
  });
  return res.data;
};
