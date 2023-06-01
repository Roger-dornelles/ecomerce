import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000;

  @media (max-width: 1280px) {
    width: 100%;
    margin-top: 2rem;
  }

  /* @media (max-width: 300px) {
    width: 100%;
    margin: 0 auto;
    margin-top: 2rem;
  } */
`;

export const ContainerDivision = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;

export const DivisionOne = styled.div`
  width: 48%;
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid #f6f1f1;

  @media (max-width: 920px) {
    width: 95%;
    margin: 0 auto;
  }
`;

export const H2 = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  color: #c3c2c1;
  margin-bottom: 1rem;
`;

export const UL = styled.ul`
  width: 100%;
  list-style: none;
`;

export const LI = styled.li`
  width: 100%;
  background-color: #f8f6f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.6rem;
  border-radius: 4px;
  padding: 0.3rem;
  border: 1px solid #ccc;
`;

interface PropsImage {
  width?: string;
}

export const Img = styled.img<PropsImage>`
  width: ${(props) => (props.width ? props.width : '50px')};
  height: ${(props) => (props.height ? props.height : '50px')};
  border-radius: 4px;
`;

export const Span = styled.span`
  margin-left: 0.5rem;
`;

export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #c3c2c1;
  font-weight: bold;
`;

export const DivisionTwo = styled.div`
  width: 48%;
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid #f6f1f1;

  @media (max-width: 920px) {
    width: 95%;
    margin: 0 auto;
    margin-top: 1.5rem;
  }
`;

export const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f8f6f4;
  margin: 0.5rem 0px;
  border-radius: 4px;
  padding: 1rem 0;

  @media (max-width: 820px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const ContainerCardName = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 4px;

  @media (max-width: 820px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 1rem 0;
  }
`;

export const InputRadio = styled.input.attrs({ type: 'radio' })`
  margin: 0px 0.5rem;
`;

interface PropsInfoCard {
  isVisible?: string;
}

export const ContainerInfoCard = styled.div<PropsInfoCard>`
  width: 100%;
  margin-bottom: 2rem;
  background-color: #eeeeee;
  margin-top: 1rem;
  border-radius: 8px;
  padding: 1rem;
  ${(props) =>
    props.isVisible
      ? 'display:flex; flex-direction:column; justify-content:center;  transition:2s; opacity:1;'
      : 'opacity:0;transition:2s; display:block;'}
`;

export const ContainerLogradouro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;

  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Error = styled.span`
  position: absolute;
  margin-top: -120px;
  margin-left: 10px;
  color: #f99b7d;
  font-size: 12px;
`;
