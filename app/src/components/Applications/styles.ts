import styled from 'styled-components/native';

export const Application = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const ApplicationDetails = styled.View`
    flex: 1;
`;

export const Information = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Image = styled.Image`
    width: 16px;
    height: 16px;
    margin-right: 8px;
`;

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    background: rgba(204, 204, 204, 0.3);
    margin: 24px 0;
`;

export const ChangeStatusButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 0;
    right: 0;
`;
