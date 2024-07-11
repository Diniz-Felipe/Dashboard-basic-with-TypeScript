import * as S from './styles';

interface LabelProps {
    text: string;
};

export const Label = ({ text }: LabelProps) => {
    return (
        <S.Label>{text}</S.Label>
    )
}