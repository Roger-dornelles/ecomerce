import * as Styled from './styled';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { BsSearch } from 'react-icons/bs';
import { useContext, useEffect } from 'react';
import { JwtPayloads, UserContext } from '../../context/userContext';
import Cookies from 'js-cookie';
import JwtVerify from '../../Jwt/index';
import { JwtPayload } from 'jsonwebtoken';


export const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const token: string | undefined = Cookies.get('token');
  useEffect(() => {
    token && Object(setUser)({ token: token });

    const jwt = async () => {
      try {
        if (token) {
          const decoded = (await JwtVerify(token as string)) as JwtPayload | JwtPayloads;
          Object(setUser)({
            id: decoded?.id,
            email: decoded?.email,
            token: token,
          });
        }
      } catch (error) {
        return {};
      }
    };
    jwt();
  }, [token]);

  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/');
    window.location.reload();
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
            {!user.token && (
              <li>
                <Link to={`/login`}>Login</Link>
              </li>
            )}

            {!user.token && (
              <li>
                <Link to={`/cadastro`}>Criar cadastro</Link>
              </li>
            )}

            {user.token && (
              <li>
                <Link to={'/profile'}>Perfil</Link>
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
    </>
  );
};
