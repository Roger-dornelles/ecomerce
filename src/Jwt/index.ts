import JWT from 'jsonwebtoken';

const JwtVerify = async (token: string) => {
  try {
    if (token) {
      const decoded = await JWT.decode(token);
      return decoded;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return {
      erro: true,
      message: 'Ocorreu um erro',
      data: null,
    };
  }
};
export default JwtVerify;
