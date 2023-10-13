import {
    Container,
    StatusContainer,
    ApplicationsContainer,
    Footer,
    FooterContainer
} from './styles';

import { Header } from '../components/Header';

export function Main() {
    return (
        <>
            <Container>
                <Header />

                <StatusContainer></StatusContainer>

                <ApplicationsContainer></ApplicationsContainer>
            </Container>

            <Footer>
                <FooterContainer></FooterContainer>
            </Footer>
        </>
    );
}
