import * as Styled from './styled';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <div>
          <img src="" alt="logomarca" />
        </div>
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
    </Styled.Container>
  );
};
