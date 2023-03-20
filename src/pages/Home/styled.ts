import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.header`
  width: 100vw;
  height: 5rem;
  padding-top: 1.5rem;
  background-color: #cccc;
  display: flex;
  justify-content: space-between;

  div {
    margin-left: 2rem;
  }

  nav {
    ul {
      display: flex;
      justify-content: space-around;

      li {
        list-style: none;
        padding-right: 2.5rem;
      }
    }
  }
`;
