import * as styled from './styled';

interface PropsInput {
  label: string;
  placeholder: string;
  width?: string;
  pattern?: any;
}

const Input = ({ label, placeholder, width, pattern }: PropsInput) => {
  return (
    <styled.ContainerInfoCard>
      <styled.InfoCardFront>
        <styled.Label>{label}</styled.Label>
        <styled.Input placeholder={placeholder} width={width} pattern={pattern} />
      </styled.InfoCardFront>
    </styled.ContainerInfoCard>
  );
};

export default Input;
