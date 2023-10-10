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
		"status": "6519a4bd7a931b3fc0a49b4d",
        "createdAt": "2023-09-22T00:55:54.272Z"
	},
    {
        "_id": "65122b9402c036a5972c3ea1",
		"title": "Desenvolvedor",
		"company": "Confirm8",
		"active": "yes",
		"status": "6519a4e97a931b3fc0a49b52",
		"createdAt": "2023-09-26T00:53:40.158Z",
    },
    {
        "_id": "6524b6f4eb6bd493a9a16ddf",
		"title": "Programador",
		"company": "De dentro de casa",
		"active": "yes",
		"status": "6519a5007a931b3fc0a49b54",
		"createdAt": "2023-10-10T02:29:08.717Z",
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
