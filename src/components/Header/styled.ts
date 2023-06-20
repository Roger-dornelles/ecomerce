import styled from 'styled-components';

type Props = {
  visible?: boolean;
};

export const Header = styled.header<Props>`
  width: 90%;
  height: 5.5rem;
  margin: 0 auto;
  padding-top: 1.5rem;
  background-color: #82aae3;
  display: flex;
  justify-content: space-between;
  color: #fff;
  border-radius: 0px 0px 10px 10px;

  div {
    padding-left: 2rem;

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
        padding-right: 1rem;

        a {
          text-decoration: none;
          color: #fff;
          flex-wrap: wrap;
        }

        p {
          position: relative;
          margin-top: 2px;
        }

        button {
          border: none;
          cursor: pointer;
          background-color: transparent;
          color: #fff;
        }
      }
    }

    @media (max-width: 540px) {
      display: none;
    }
  }
`;

export const Span = styled.span<Props>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  position: absolute;
  top: 15px;
  right: -5px;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #30aadd;
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

export const ButtonAddProduct = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e86a33 !important;
  padding: 0.3rem;
  border-radius: 4px;
`;
