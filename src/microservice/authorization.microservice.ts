import axios from 'axios';
import { IAuth } from '../types';

export const authorize = async (token: string): Promise<IAuth> => {
  const url = process.env.MICROSERVICE_AUTHORIZATION_HOST || '';
  const { data } = await axios.get(`${url}/v1/oauth2/authenticate`, {
    headers: {
      Authorization: token
    }
  });
  return data;
};
