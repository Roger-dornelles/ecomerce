import * as Styled from './styled';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { BsSearch } from 'react-icons/bs';
import { useContext, useEffect } from 'react';
import { JwtPayloads, UserContext } from '../../context/userContext';
import Cookies from 'js-cookie';
import JwtVerify from '../../Jwt/index';
import { JwtPayload } from 'jsonwebtoken';

type Props = {
  children: any;
};

export const Header = ({ children }: Props) => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const token: string | undefined = Cookies.get('token');
  useEffect(() => {
    const jwt = () => {
      try {
        const decoded = JwtVerify(token as string) as JwtPayload | JwtPayloads;

        if (decoded.isValidToken) {
          Object(setUser)({
            id: decoded.decoded.id,
            email: decoded.decoded.email,
            token: decoded.isValidToken,
          });
          return;
        } else {
          Cookies.remove('token');
          Object(setUser)({
            id: 0,
            email: '',
            token: false,
          });
          return;
        }
      } catch (error) {
        Cookies.remove('token');
        Object(setUser)({
          id: 0,
          email: '',
          token: false,
        });
        return;
      }
    };

    jwt();
  }, [token]);

  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/');
    window.location.reload();
  };

  const handleNavigateAddProduct = () => {
    navigate('/adicionar/produto');
  };

  return (
    <>
      <Styled.Header>
        <div>
          <img src={logo} alt="logomarca" />
          <strong>Ecommerce</strong>
        </div>

        <Styled.Input>
          <form>
            <input type="text" />
            <strong>
              <BsSearch />
            </strong>
          </form>
        </Styled.Input>

        <nav>
          <ul>
            <li>
              <Link to={'/'}>Produtos</Link>
            </li>

            {!user.token && (
              <li>
                <Link to={`/login`}>Login</Link>
              </li>
            )}

            {!user.token && (
              <li>
                <Link to={`/cadastro`}>Cadastrar-se</Link>
              </li>
            )}

            {user.token && (
              <li>
                <Link to={'/profile'}>Perfil</Link>
              </li>
            )}

            {user.token && (
              <li>
                <Styled.ButtonAddProduct onClick={handleNavigateAddProduct}>Adicionar Produto</Styled.ButtonAddProduct>
              </li>
            )}

            {user.token && (
              <li>
                <button onClick={handleLogout}>Sair</button>
              </li>
            )}
          </ul>
        </nav>
      </Styled.Header>
      {children}
    </>
  );
};
