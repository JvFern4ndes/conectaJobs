import CloseIcon from '../../assets/images/close-icon.svg';
import ApplicationIcon from '../../assets/images/ApplicationIcon.svg';

import { Overlay, ModalBody } from "./styles";

interface ApplicationModalProps {
    visible: boolean;
}

export function ApplicationModal({ visible }: ApplicationModalProps) {
    if (!visible) {
        return null;
    }

    return (
        <Overlay>
            <ModalBody>
                <header>
                    <strong>Desenvolvedor</strong>

                    <button type="button">
                        <img src={CloseIcon} alt='Ícone de fechar o modal'></img>
                    </button>
                </header>

                <div className="status-container">
                    <small>Status da Candidatura</small>
                    <div>
                        <img src={ApplicationIcon} ></img>
                        <strong>Candidaturas</strong>
                    </div>
                </div>
            </ModalBody>
        </Overlay>
    )
}
