import {Category, Profile} from '../types/domain';
import {getEncryptStorage} from '../utils';
import axiosInstance from './axios';

type Gender = 'Male' | 'Female';

type SignupUser = {
  id: string;
  password: string;
  email: string;
  name: string;
  phonenumber: string;
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
  phonenumber,
  residence,
  birth,
  age,
  gender,
}: SignupUser): Promise<void> => {
  await axiosInstance
    .post('/register', {
      id,
      password,
      email,
      name,
      phonenumber,
      residence,
      birth,
      age,
      gender,
    })
    .then(res => console.log(res))
    .catch(err => {
      console.log(err);
    });

  return;
};

type ResponseToken = {
  accessToken: string;
  refreshToken: string;
};

function getFormData(object: any) {
  const formData = new FormData();
  Object.keys(object).forEach(key => {
    if (typeof object[key] !== 'object') formData.append(key, object[key]);
    else formData.append(key, JSON.stringify(object[key]));
  });
  return formData;
}

const postLogin = async ({id, password}: LoginUser): Promise<ResponseToken> => {
  await fetch('http://43.201.104.222:5000/login', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: getFormData({username: id, password}),
  })
    .then(res => console.log(res))
    .catch(err => console.log(err));

  console.log('xxxxxx');
  await axiosInstance
    .post('/login', {
      id,
      password,
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
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
