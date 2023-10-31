import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import axios from 'axios';

import EmptyIcon from '../assets/images/EmptyIcon.png';

import {
    Container,
    StatusContainer,
    ApplicationsContainer,
    Footer,
    FooterContainer,
    CenteredContainer,
    Image,
} from './styles';

import { Text } from '../components/Text';

import { Header } from '../components/Header';
import { Applications } from '../components/Applications';
import { StatusComponent } from '../components/StatusComponent';
import { Button } from '../components/Button';
import { CreateApplicationModal } from '../components/CreateApplicationModal';
import { Confirmation } from '../components/Confirmation';

import { Application } from '../types/Application';
import { Status } from '../types/Status';

import { applications as mockApplications } from '../mocks/applications';

export function Main() {
    const [isCreateApplicationModalVisible, setIsCreateApplicationModalVisible] = useState(false);
    const [selectedInfos, setSelectedInfos] = useState({ title: '', company: '' });
    const [isLoading] = useState(false);
    const [applications] = useState<Application[]>(mockApplications);
    const [status, setStatus] = useState<Status[]>([]);

    useEffect(() => {
        axios.get('http://192.168.0.116:3001/status').then((response) => {
            setStatus(response.data);
        });
    }, []);

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
                            <StatusComponent
                                status={status}
                            />
                        </StatusContainer>

                        {applications.length > 0 ? (
                            <ApplicationsContainer>
                                <Applications
                                    applications={applications}
                                />
                            </ApplicationsContainer>
                        ) : (
                            <CenteredContainer>
                                <Image source={EmptyIcon}  />

                                <Text color='#666' style={{ marginTop: 24 }}>Nenhuma candidatura foi encontrada!</Text>
                            </CenteredContainer>
                        )}
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
