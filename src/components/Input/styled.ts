import styled from 'styled-components';

export const ContainerInfoCard = styled.form`
  width: 100%;
`;

export const InfoCardFront = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  width: 100%;
`;

interface PropsInput {
  width?: string;
}
export const Input = styled.input<PropsInput>`
  width: ${(props) => (props.width ? props.width : '100%')};
  padding: 0.4rem;
  outline: none;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  color: #7f8487;

  &::placeholder {
    color: #cfd2cf;
  }

  &:focus {
    border: 1px solid #ccc;
  }
`;
