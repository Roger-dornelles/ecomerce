import * as Styled from './styled';

export const Login = () => {
  return (
    <Styled.Container>
      <form>
        <label>
          Email:
          <input type="email" />
        </label>
      </form>
    </Styled.Container>
  );
};
