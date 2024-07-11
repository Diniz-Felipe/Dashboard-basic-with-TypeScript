import { InputHTMLAttributes } from 'react';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export const Input = ({ name, type, onChange, value, ...inputProps} : InputProps) => {
  return (
    <S.Input 
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      {...inputProps}
    />
  )
}
