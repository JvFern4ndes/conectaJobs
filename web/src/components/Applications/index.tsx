import { useEffect, useState } from 'react';
import socketIo from 'socket.io-client';

import { Application } from '../../types/Application';
import { api } from '../../../utils/api';

import ApplicationIcon from '../../assets/images/ApplicationIcon.svg';
import OnlineTestIcon from '../../assets/images/OnlineTestIcon.svg';
import InterviewIcon from '../../assets/images/InterviewIcon.svg';
import WaitingReturnIcon from '../../assets/images/WaitingReturnIcon.svg';

import { ApplicationsBoard } from '../ApplicationsBoard';
import { Container } from "./styles";



export function Applications() {
    const [applications, setApplications] = useState<Application[]>([]);

    useEffect(() => {
        const socket = socketIo('http://localhost:3001', {
            transports: ['websocket'],
        });

        socket.on('applications@new', (application) => {
            console.log('Nova candidatura cadastrada', application);
            setApplications(prevState => prevState.concat(application));
        });
    }, []);

    useEffect(() => {
        api.get('/applications')
            .then(({ data }) => {
                setApplications(data);
            })
    }, []);

    const filteredApplications = applications.filter((applications) => applications.status._id === "65303fc8c71bacaf0499bd10");
    const OnlineTest = applications.filter((applications) => applications.status._id === "65303ff1c71bacaf0499bd13");
    const Interview = applications.filter((applications) => applications.status._id === "6530400fc71bacaf0499bd15");
    const waitingReturn = applications.filter((applications) => applications.status._id === "65304020c71bacaf0499bd17");

    function handleInactivateApplication(applicationId: string) {
        setApplications((prevState) => prevState.filter(application => application._id !== applicationId))
    }

    function handleApplicationStatusChange(applicationId: string, status: Application['status']) {
        setApplications((prevState) => prevState.map((applications) => (
            applications._id === applicationId
                ? { ...applications, status }
                : applications
        )));
    }

    return (
        <Container>
            <ApplicationsBoard
                statusIcon={ApplicationIcon}
                title="Candidaturas"
                applications={filteredApplications}
                onInactivateApplication={handleInactivateApplication}
                onChangeApplicationStatus={handleApplicationStatusChange}
            />

            <ApplicationsBoard
                statusIcon={OnlineTestIcon}
                title="Teste Online"
                applications={OnlineTest}
                onInactivateApplication={handleInactivateApplication}
                onChangeApplicationStatus={handleApplicationStatusChange}
            />

            <ApplicationsBoard
                statusIcon={InterviewIcon}
                title="Entrevista"
                applications={Interview}
                onInactivateApplication={handleInactivateApplication}
                onChangeApplicationStatus={handleApplicationStatusChange}
            />

            <ApplicationsBoard
                statusIcon={WaitingReturnIcon}
                title="Aguardando Retorno"
                applications={waitingReturn}
                onInactivateApplication={handleInactivateApplication}
                onChangeApplicationStatus={handleApplicationStatusChange}
            />
        </Container>
    );
}
