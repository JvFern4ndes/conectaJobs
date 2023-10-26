import { useState } from 'react';
import { ActivityIndicator } from 'react-native';

import {
    Container,
    StatusContainer,
    ApplicationsContainer,
    Footer,
    FooterContainer,
    CenteredContainer
} from './styles';

import { Header } from '../components/Header';
import { Applications } from '../components/Applications';
import { StatusComponent } from '../components/StatusComponent';
import { Button } from '../components/Button';
import { CreateApplicationModal } from '../components/CreateApplicationModal';
import { Confirmation } from '../components/Confirmation';

export function Main() {
    const [isCreateApplicationModalVisible, setIsCreateApplicationModalVisible] = useState(false);
    const [selectedInfos, setSelectedInfos] = useState({ title: '', company: '' });
    const [isLoading] = useState(false);

    function handleSaveApplication(title: string, company: string) {
        setSelectedInfos({ title, company });
    }

    function handleResetApplication() {
        setSelectedInfos({ title: '', company: '' });
    }

    return (
        <>
            <Container>
                <Header
                    selectedInfos={selectedInfos}
                    onCancelApplication={handleResetApplication}
                />

                {isLoading && (
                    <CenteredContainer>
                        <ActivityIndicator color="#68DDBD" size='large'/>
                    </CenteredContainer>
                )}

                {!isLoading && (
                    <>
                        <StatusContainer>
                            <StatusComponent />
                        </StatusContainer>

                        <ApplicationsContainer>
                            <Applications />
                        </ApplicationsContainer>
                    </>
                )}
            </Container>

            <Footer>
                <FooterContainer>
                    {(!selectedInfos.title || !selectedInfos.company) && (
                        <Button
                            onPress={() => setIsCreateApplicationModalVisible(true)}
                            disabled={isLoading}
                        >
                            Nova Candidatura
                        </Button>
                    )}

                    {(selectedInfos.title || selectedInfos.company) && (
                        <Confirmation
                            selectedInfos={selectedInfos}
                            onConfirmApplication={handleResetApplication}
                        />
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
