import Cookies from 'js-cookie';
import { axiosClient } from '../axios/config';

type UserDataType = {
  id: number;
  userData: {
    name?: string;
    password?: string;
    email?: string;
    contact?: string;
    logradouro?: string;
    number?: string;
    state?: string;
  };
};

const updateUserService = async ({ id, userData }: UserDataType) => {
  try {
    if (!id) {
      return {
        error: true,
        message: 'Usuário não encontrado.',
        data: null,
      };
    }

    const response = await axiosClient({
      url: `/user/${id}`,
      method: 'PUT',
      data: {
        name: userData.name && userData.name,
        password: userData.password && userData.password,
        email: userData.email && userData.email,
        contact: userData.contact && userData.contact,
        logradouro: userData.logradouro && userData.logradouro,
        number: userData.number && userData.number,
        state: userData.state && userData.state,
      },
    });
    if (response.data.error) {
      return {
        error: true,
        message: response.data.message,
        data: null,
      };
    }
    return {
      error: false,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    return {
      error: true,
      message: 'Ocorreu um erro, tente mais tarde',
      data: null,
    };
  }
};

export default updateUserService;
