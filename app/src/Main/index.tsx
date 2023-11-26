import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

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

import { LoginModal } from '../components/LoginModal';

import { Application } from '../types/Application';
import { Status } from '../types/Status';

import { api } from '../../utils/api';

export function Main() {
    const [isCreateApplicationModalVisible, setIsCreateApplicationModalVisible] = useState(false);
    const [selectedInfos, setSelectedInfos] = useState({ title: '', company: '' });
    const [isLoading, setIsLoading] = useState(true);
    const [applications, setApplications] = useState<Application[]>([]);
    const [status, setStatus] = useState<Status[]>([]);
    const [isLoadingApplications, setIsLoadingApplications] = useState(false);
    const [isLoginModalInvisible, setIsLoginModalInvisible] = useState(true);

    function handleCloseLoginModal() {
        setIsLoginModalInvisible(false);
    }

    useEffect(() => {
        Promise.all([
            api.get('/status'),
            api.get('/applications'),
        ]).then(([statusResponse, applicationsResponse]) => {
            setStatus(statusResponse.data);
            setApplications(applicationsResponse.data);

        })
            .catch((error: any) => {
                console.log(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    async function handleSelectStatus(statusId: string) {
        const route = !statusId
            ? '/applications'
            : `/status/${statusId}/applications`;

        setIsLoadingApplications(true);

        await new Promise(resolve => setTimeout(resolve, 1000));
        const { data } = await api.get(route);

        setApplications(data);
        setIsLoadingApplications(false);
    }

    function handleSaveApplication(title: string, company: string) {
        setSelectedInfos({ title, company });
    }

    function handleResetApplication() {
        setSelectedInfos({ title: '', company: '' });
    }

    return (
        <>
            <LoginModal
                visible={isLoginModalInvisible}
                onPress={handleCloseLoginModal}
            />

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
                                onSelectStatus={handleSelectStatus}
                            />
                        </StatusContainer>

                        {isLoadingApplications ? (
                            <CenteredContainer>
                                <ActivityIndicator color="#68DDBD" size='large'/>
                            </CenteredContainer>
                        ) : (
                            <>
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
