import styled from 'styled-components';

interface ContainerProps {
  openDetails: boolean;
}
export const Container = styled.div<ContainerProps>`
  width: 100%;
  margin: 0 auto;
  display: ${(props) => (props.openDetails ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 1rem;
`;

export const Close = styled.span`
  position: absolute;
  right: 20px;
  top: 10px;
  font-size: 1.3rem;
  cursor: pointer;
  color: #ff0000;
  font-weight: bold;
`;

export const H2 = styled.h2`
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

export const DescriptionContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 4px;
  padding-bottom: 2rem;
  margin-top: 1rem;
`;

export const Description = styled.p`
  width: 50%;
  margin: 0 auto;
  text-align: left;
`;
export const DescriptionPurchase = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: space-around;
`;

export const IMG = styled.img`
  width: 30px;
  height: 20px;
  margin-right: 0.5rem;
`;

export const DescriptionTotalPurchase = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1.5rem;
  flex-direction: column;
  border-top: 1px solid #b2b2b2;
`;

export const ContainerDescription = styled.div`
  width: 70%;
  display: flex;
  padding: 0.2rem 1rem;
`;

export const DescriptionGray = styled.span`
  color: #4d4d4d;
  width: 50%;
`;

export const DescriptionRed = styled.span`
  width: 50%;
  color: #ff5959;
`;

export const Date = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0.2rem 1rem;
`;
