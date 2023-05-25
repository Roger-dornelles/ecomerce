import { Span } from './../../pages/DisplayOneProduct/styled';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  flex-direction: column;
  padding: 1rem;
  border-radius: 4px;
`;

export const Card = styled.div`
  width: 40%;
  height: 10rem;
  border-radius: 4px;
  background-color: white;
  background-image: linear-gradient(to bottom right, #b2b2b2, #cdc7be);
  margin-top: 1rem;
  border-radius: 8px;
`;

export const MagneticStripe = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: gray;
  margin-top: 1rem;
`;

type PropsBehindTheCard = {
  behindTheCard?: boolean;
};
export const BehindTheCard = styled.div<PropsBehindTheCard>`
  ${(props) =>
    props.behindTheCard ? 'display: block; transition: 2s; opacity: 1;' : 'display: block; transition: 2s; opacity: 0;'}

  width: 100%;
  height: 100%;
`;

export const CodeCard = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  input {
    border: 0;
    outline: none;
    background-color: #cdc7be;
    font-size: 10px;
    margin-bottom: 1rem;
    margin-left: 0.7rem;
    padding-left: 0.4rem;
  }
`;
