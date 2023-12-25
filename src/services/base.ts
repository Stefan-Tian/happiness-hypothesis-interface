import { camelToSnake, snakeToCamel } from '@/helpers/case';
import axios, { AxiosInstance } from 'axios';
import { BASE_API_URL } from './constants';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_API_URL,
  transformRequest: [
    (data: any) => {
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

export default axiosInstance;
