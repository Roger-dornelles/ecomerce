import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000;
`;

export const ContainerDivision = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2rem;
`;

export const DivisionOne = styled.div`
  width: 48%;
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid #f6f1f1;
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

type Props = {
  width?: string;
  height?: string;
};
export const Img = styled.img`
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
`;

export const ContainerCardName = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 4px;
`;

export const InputRadio = styled.input.attrs({ type: 'radio' })`
  margin: 0px 0.5rem;
`;
