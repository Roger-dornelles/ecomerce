import { axiosClient } from '../axios/config';

const userInfoService = async (id: number) => {
  try {
    if (!id) {
      return {
        error: true,
        message: 'ID invalido',
        data: null,
      };
    }

    const response = await axiosClient({
      url: `/user/info/${id}`,
      method: 'GET',
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
      message: null,
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
export default userInfoService;
