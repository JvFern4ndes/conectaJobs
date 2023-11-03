import { useEffect, useState } from 'react';

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
        api.get('/applications')
            .then(({ data }) => {
                setApplications(data);
            })
    }, []);

    const filteredApplications = applications.filter((applications) => applications.status._id === "65303fc8c71bacaf0499bd10");
    const OnlineTest = applications.filter((applications) => applications.status._id === "65303ff1c71bacaf0499bd13");
    const Interview = applications.filter((applications) => applications.status._id === "6530400fc71bacaf0499bd15");
    const waitingReturn = applications.filter((applications) => applications.status._id === "65304020c71bacaf0499bd17");

    return (
        <Container>
            <ApplicationsBoard
                statusIcon={ApplicationIcon}
                title="Candidaturas"
                applications={filteredApplications}
            />

            <ApplicationsBoard
                statusIcon={OnlineTestIcon}
                title="Teste Online"
                applications={OnlineTest}
            />

            <ApplicationsBoard
                statusIcon={InterviewIcon}
                title="Entrevista"
                applications={Interview}
            />

            <ApplicationsBoard
                statusIcon={WaitingReturnIcon}
                title="Aguardando Retorno"
                applications={waitingReturn}
            />
        </Container>
    );
}
