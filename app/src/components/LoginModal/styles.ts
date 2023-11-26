import styled from 'styled-components/native';

export const ModalBody = styled.View`
    background: #fafafa;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.ImageBackground`
    width: 100px;
    height: 100px;
`;

export const Input = styled.TextInput`
    height: 40px;
    width: 80%;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 16px;
    padding: 0 10px;
`;

export const Footer = styled.View`
    min-height: 110px;
    background: #fff;
    padding: 16px 24px;
`;
