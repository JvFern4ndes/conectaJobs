import { Application } from '../../types/Application';

import ApplicationIcon from '../../assets/images/ApplicationIcon.svg';
import OnlineTestIcon from '../../assets/images/OnlineTestIcon.svg';
import InterviewIcon from '../../assets/images/InterviewIcon.svg';
import WaitingReturnIcon from '../../assets/images/WaitingReturnIcon.svg';

import { ApplicationsBoard } from '../ApplicationsBoard';
import { Container } from "./styles";

const applications: Application[] = [
    {
		"_id": "650ce61a642dd13426d10887",
		"title": "Desenvolvedor",
		"company": "Google",
		"active": "yes",
		"status": '6519a4bd7a931b3fc0a49b4d',
	},
];

export function Applications() {
    return (
        <Container>
            <ApplicationsBoard
                statusIcon={ApplicationIcon}
                title="Candidaturas"
                applications={applications}
            />

            <ApplicationsBoard
                statusIcon={OnlineTestIcon}
                title="Teste Online"
                applications={[]}
            />

            <ApplicationsBoard
                statusIcon={InterviewIcon}
                title="Entrevista"
                applications={[]}
            />

            <ApplicationsBoard
                statusIcon={WaitingReturnIcon}
                title="Aguardando Retorno"
                applications={[]}
            />
        </Container>
    );
}
