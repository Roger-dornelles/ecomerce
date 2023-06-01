import { SetStateAction } from 'react';
import * as styled from './styled';

interface PropsInput {
  label: string;
  placeholder: string;
  width?: string;
  pattern?: any;
  onClick?: () => void;
  value?: string;
  onChange?: (e: { target: { value: SetStateAction<string> } }) => void;
  type: 'text' | 'number' | 'tel' | 'email' | 'date';
  maxlength?: string;
  error?: boolean;
}

const Input = ({
  label,
  placeholder,
  width,
  pattern,
  onClick,
  onChange,
  value,
  type,
  maxlength,
  error,
  ...props
}: PropsInput) => {
  return (
    <styled.ContainerInfoCard>
      <styled.Label>{label}</styled.Label>
      <styled.Input
        {...props}
        type={type}
        placeholder={placeholder}
        width={width}
        pattern={pattern}
        value={value}
        onChange={onChange}
        onClick={onClick}
        maxLength={maxlength}
        error={error}
      />
    </styled.ContainerInfoCard>
  );
};

export default Input;
