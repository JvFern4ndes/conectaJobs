import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
    margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
    flex: 1;
    background: #FAFAFA;
`;

export const StatusContainer = styled.View`
    height: 73px;
    margin-top: 34px;
`;

export const ApplicationsContainer = styled.View`
    flex: 1;
`;

export const Footer = styled.View`
    min-height: 110px;
    background: #FFF;
`;

export const FooterContainer = styled.SafeAreaView``;
