import { IconType } from 'react-icons';
import * as IonIcons from 'react-icons/io5';

interface IconProps {
    name: keyof typeof IonIcons;
    color: string;
    size: number;
}

export const Icon = ({ name, color, size }: IconProps & IconType) => {
    const IconComponent = IonIcons[name];

    if (!IconComponent) {
        return null;
    }

    return <IconComponent name={name} color={color} size={size} />;
};