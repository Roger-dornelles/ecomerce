import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

type Props = {
  children: JSX.Element;
};

export const isLogged = () => {
  let token = Cookies.get('token');

  return token ? true : false;
};

export const PrivateRoute = ({ children }: Props) => {
  const logged = isLogged();

  return logged ? children : <Navigate to="/login" />;
};
