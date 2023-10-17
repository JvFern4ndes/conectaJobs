import {
    Container,
    StatusContainer,
    ApplicationsContainer,
    Footer,
    FooterContainer
} from './styles';

import { Header } from '../components/Header';
import { Applications } from '../components/Applications';
import { StatusComponent } from '../components/StatusComponent';
import { Button } from '../components/Button';

export function Main() {
    return (
        <>
            <Container>
                <Header />

                <StatusContainer>
                    <StatusComponent />
                </StatusContainer>

                <ApplicationsContainer>
                    <Applications />
                </ApplicationsContainer>
            </Container>

            <Footer>
                <FooterContainer>
                    <Button onPress={() => alert('Clicou')}>
                        Nova Candidatura
                    </Button>
                </FooterContainer>
            </Footer>
        </>
    );
}
