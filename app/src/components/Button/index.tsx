import React from 'react';
import { Text } from '../Text';
import { Container } from './styles';

interface ButtonProps {
    children: string;
    onPress: () => void;
    disabled?: boolean;
    style?: React.CSSProperties;
}

export function Button({ children, onPress, disabled }: ButtonProps) {
    return (
        <Container onPress={onPress} disabled={disabled}>
            <Text weight="600" color="#fff">
                {children}
            </Text>
        </Container>
    );
}
