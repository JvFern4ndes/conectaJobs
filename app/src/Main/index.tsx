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
import { CreateApplicationModal } from '../components/CreateApplicationModal';
import { useState } from 'react';

export function Main() {
    const [isCreateApplicationModalVisible, setIsCreateApplicationModalVisible] = useState(false);
    const [selectedInfos, setSelectedInfos] = useState({ title: '', company: '' });

    function handleSaveApplication(title: string, company: string) {
        setSelectedInfos({ title, company });
    }

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
                    {!selectedInfos && (
                        <Button onPress={() => setIsCreateApplicationModalVisible(true)}>
                            Nova Candidatura
                        </Button>
                    )}
                </FooterContainer>
            </Footer>

            <CreateApplicationModal
                visible={isCreateApplicationModalVisible}
                onClose={() => setIsCreateApplicationModalVisible(false)}
                onSave={handleSaveApplication}
            />
        </>
    );
}
