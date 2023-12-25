import { camelToSnake, snakeToCamel } from '@/helpers/case';
import axios, { AxiosInstance } from 'axios';
import { BASE_API_URL } from './constants';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_API_URL,
  transformRequest: [
    (data: any) => {
      if (data instanceof FormData) {
        return data;
      }
      return JSON.stringify(camelToSnake(data));
    },
  ],
  transformResponse: [
    (data: any) => {
      return snakeToCamel(JSON.parse(data));
    },
  ],
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface ErrorResponse {
  code: string;
  payload: Record<string, string[]>;
  message: string;
}

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data.message === 'Unauthenticated') {
      localStorage.removeItem('token');
    }

    if (response.data.message === 'Unauthorized') {
      window.location.href = '/page-not-found';
    }

    return response;
  },
  (error) => {
    if (error.response?.data?.message === 'Unauthenticated') {
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
