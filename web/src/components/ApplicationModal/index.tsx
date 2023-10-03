import CloseIcon from '../../assets/images/close-icon.svg';
import ApplicationIcon from '../../assets/images/ApplicationIcon.svg';
import OnlineTestIcon from '../../assets/images/OnlineTestIcon.svg';
import InterviewIcon from '../../assets/images/InterviewIcon.svg';
import WaitingReturnIcon from '../../assets/images/WaitingReturnIcon.svg';

import { Application } from '../../types/Application';

import { Overlay, ModalBody, ApplicationDetails } from "./styles";

interface ApplicationModalProps {
    visible: boolean;
    application: Application | null;
}

export function ApplicationModal({ visible, application }: ApplicationModalProps) {
    if (!visible || !application) {
        return null;
    }

    return (
        <Overlay>
            <ModalBody>
                <header>
                    <strong>{application.title}</strong>

                    <button type="button">
                        <img src={CloseIcon} alt='Ícone de fechar o modal'></img>
                    </button>
                </header>

                <div className="status-container">
                    <small>Status da Candidatura</small>
                    <div>
                        <span>
                            {application.status === '6519a4bd7a931b3fc0a49b4d' && (
                                <img src={ApplicationIcon}></img>
                            )}
                            {application.status === '6519a4d47a931b3fc0a49b50' && (
                                <img src={OnlineTestIcon}></img>
                            )}
                            {application.status === '6519a4e97a931b3fc0a49b52' && (
                                <img src={InterviewIcon}></img>
                            )}
                            {application.status === '6519a5007a931b3fc0a49b54' && (
                                <img src={WaitingReturnIcon}></img>
                            )}
                        </span>

                        <strong>
                            {application.status === '6519a4bd7a931b3fc0a49b4d' && 'Candidaturas'}
                            {application.status === '6519a4d47a931b3fc0a49b50' && 'Teste Online'}
                            {application.status === '6519a4e97a931b3fc0a49b52' && 'Entrevista'}
                            {application.status === '6519a5007a931b3fc0a49b54' && 'Aguardando Retorno'}
                        </strong>
                    </div>
                </div>

                <ApplicationDetails>
                    <strong>Detalhes da candidatura</strong>
                </ApplicationDetails>
            </ModalBody>
        </Overlay>
    )
}
