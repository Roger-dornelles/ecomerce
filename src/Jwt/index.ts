import { axiosClient } from '../axios/config';
import JWT from 'jsonwebtoken';

const JwtVerify = async (token: string) => {
  try {
    if (token) {
      const decoded = await JWT.decode(token);

      axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      return decoded;
    } else {
      return null;
    }
  } catch (error) {
    return {
      erro: true,
      message: 'Ocorreu um erro',
      data: null,
    };
  }
};
export default JwtVerify;
