import styled from 'styled-components';

interface PropsContainer {
  isVisible?: boolean;
}

export const Container = styled.div<PropsContainer>`
  width: 100%;
  ${(props) =>
    props.isVisible ? 'display:flex; opacity:1; transition:2s;' : 'display:block; opacity:0; transition:2s;'}
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  flex-direction: column;
  padding: 1rem;
  border-radius: 4px;
  margin: 0 auto;
`;

export const H2 = styled.h2`
  color: #c3c2c1;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
`;

type PropsBehindTheCard = {
  behindTheCard?: boolean;
};

export const BehindCard = styled.div<PropsBehindTheCard>`
  ${(props) =>
    props.behindTheCard
      ? 'display: flex;  transition: 2s; opacity: 1; transform: translateX(200px);'
      : ' transition: 2s; opacity: 0;display: flex; transform: translateX(-0px);'}
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

export const BehindTheCard = styled.div`
  width: 100%;
  height: 100%;
`;

export const CodeCard = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

interface PropsInput {
  width?: string;
}
export const Input = styled.input<PropsInput>`
  border: 0;
  outline: none;
  background-color: transparent;
  font-size: 10px;
  margin-bottom: 0.3rem;
  margin-left: 0.7rem;
  padding-left: 0.4rem;
  width: ${(props) => props.width && props.width};
`;

interface FrontProps {
  front?: boolean;
}
export const FrontOfCard = styled.div<FrontProps>`
  ${(props) =>
    props.front
      ? 'display: flex; transition: 2s; opacity: 1; transform: translateX(-60px); z-index:9999;'
      : 'transition: 2s; opacity: 0; transform: translateX(100px); display: flex;'}
  width: 40%;
  height: 10rem;
  border-radius: 4px;
  background-color: white;
  background-image: linear-gradient(to bottom right, #b2b2b2, #cdc7be);
  margin-top: 1rem;
  border-radius: 8px;
`;

export const FrontCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const InfoCard = styled.div`
  display: fle;
  flex-direction: column;
`;

interface PropsImg {
  width?: string;
  marginLeft?: string;
}
export const Img = styled.img<PropsImg>`
  width: ${(props) => (props.width ? props.width : '40px')};
  height: 30px;
  margin-left: ${(props) => props.marginLeft && props.marginLeft};
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  background-color: transparent;
  border-radius: 4px;
`;
