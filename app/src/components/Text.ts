import styled from 'styled-components/native';

interface TextProps {
  weight?: '400' | '600' | '700';
  color?: string;
  size?: number;
  opacity?: number;
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ weight = '400' }) => weight ? `GeneralSans-${weight}` : 'GeneralSans-400'};
  color: ${({ color = '#333' }) => color || '#333'};
  font-size: ${({ size = 16 }) => size ? `${size}px` : '16px'};
  opacity: ${({ opacity = 1 }) => opacity || 1};
`;
