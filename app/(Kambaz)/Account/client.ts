import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const USERS_API = `${HTTP_SERVER}/api/users`;

interface UserCredentials {
  username: string;
  password: string;
}

interface User {
  _id?: string;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  dob?: string;
  email?: string;
  role?: "USER" | "ADMIN" | "FACULTY" | "STUDENT";
}

export const signin = async (credentials: UserCredentials): Promise<User | null> => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
  return response.data;
};

export const profile = async (): Promise<User | null> => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return response.data;
};

export const signup = async (user: User): Promise<User> => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};

export const signout = async (): Promise<void> => {
  await axiosWithCredentials.post(`${USERS_API}/signout`);
};

export const updateUser = async (user: User): Promise<User> => {
  const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

