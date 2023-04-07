import styled from 'styled-components';

export const Header = styled.header`
  width: 90vw;
  height: 5.5rem;
  margin: auto;
  padding-top: 1.5rem;
  background-color: #82aae3;
  display: flex;
  justify-content: space-between;
  color: #fff;
  border-radius: 0% 0% 10px 10px;

  div {
    margin-left: 2rem;

    display: flex;
    flex-direction: column;

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      margin-top: -1rem;
    }
  }

  nav {
    ul {
      display: flex;
      justify-content: space-around;
      list-style: none;

      li {
        padding-right: 2.5rem;

        a {
          text-decoration: none;
          color: #fff;
        }

        button {
          border: none;
          cursor: pointer;
          background-color: transparent;
          color: #fff;
        }
      }
    }
  }
`;

export const Input = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  margin-top: -2.5rem;

  form {
    width: 100%;
    input {
      width: 80%;
      height: 1.9rem;
      border: none;
      outline: none;
      background-color: #fff;
      border-radius: 5px;
      color: #000;
      padding-left: 0.5rem;
    }

    strong {
      margin-top: 5px;
      font-size: 3.5rem;
      margin-left: 0.5rem;
      cursor: pointer;
      font-style: bold;
    }
  }
`;
