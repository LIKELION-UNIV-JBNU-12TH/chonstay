import {Category, Profile} from '../types/domain';
import {getEncryptStorage} from '../utils';
import axiosInstance from './axios';

type Gender = 'Male' | 'Female';

type SignupUser = {
  id: string;
  password: string;
  email: string;
  name: string;
  phoneNumber: string;
  residence: string;
  birth: string;
  age: string;
  gender: Gender;
};

type LoginUser = {
  id: string;
  password: string;
};

const postSignup = async ({
  id,
  password,
  email,
  name,
  phoneNumber,
  residence,
  birth,
  age,
  gender,
}: SignupUser): Promise<void> => {
  const {data} = await axiosInstance.post('/register', {
    id,
    password,
    email,
    name,
    phoneNumber,
    residence,
    birth,
    age,
    gender,
  });

  return data;
};

type ResponseToken = {
  accessToken: string;
  refreshToken: string;
};

const postLogin = async ({id, password}: LoginUser): Promise<ResponseToken> => {
  const {data} = await axiosInstance.post('/login', {
    id,
    password,
  });

  return data;
};

type ResponseProfile = Profile & Category;

const getProfile = async (): Promise<ResponseProfile> => {
  const {data} = await axiosInstance.get('/auth/me');

  return data;
};

const getAccessToken = async (): Promise<ResponseToken> => {
  const refreshToken = await getEncryptStorage('refreshToken');
  const {data} = await axiosInstance.get('/auth/refresh', {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  return data;
};

const logout = async () => {
  await axiosInstance.post('/logout');
};

export {postSignup, postLogin, getProfile, getAccessToken, logout};
export type {LoginUser, SignupUser, ResponseToken, ResponseProfile};
