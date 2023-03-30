import * as Styled from './styled';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { BsSearch } from 'react-icons/bs';

export const Header = () => {
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
              <Link to={`/login`}>Login</Link>
            </li>

            <li>
              <Link to={`/cadastro`}>Criar cadastro</Link>
            </li>
          </ul>
        </nav>
      </Styled.Header>
    </>
  );
};
