import { Modal } from 'react-native';

import { Application } from '../../types/Application';

import {
    Image,
    CloseButton,
    ModalBody,
    Header,
    DetailsContainer,
    Info,
    DetailsImage,
    Footer,
    FooterContainer,
    FooterTextContainer
} from './styles';

import { Text } from '../Text';

import DateIcon from '../../assets/images/DateIcon.png';
import ActiveIcon from '../../assets/images/ActiveIcon.png';
import ModalLogo from '../../assets/images/ModalLogo.png';

import { Close } from '../../assets/Icons/Close';
import { Button } from '../Button';

interface ApplicationModalProps {
    visible: boolean;
    onClose: () => void;
    application: null | Application;
}

export function ApplicationModal({ visible, onClose, application }: ApplicationModalProps) {
    if (!application) {
        return null;
    }

    return (
        <Modal
            visible={visible}
            animationType='slide'
            presentationStyle='pageSheet'
            onRequestClose={onClose}
        >
            <Image
                source={ModalLogo}
            >
                <CloseButton onPress={onClose}>
                    <Close/>
                </CloseButton>
            </Image>

            <ModalBody>
                <Header>
                    <Text size={24} weight='600'>{application.title}</Text>
                    <Text color='#666' style={{ marginTop: 8 }}>
                        {application.company}
                    </Text>
                </Header>

                <DetailsContainer>
                    <Text
                        weight='600'
                        color='#666'
                        style={{ marginBottom: 48 }}
                    >
                        Detalhes
                    </Text>

                    <>
                        <Info style={{ marginBottom: 48 }}>
                            <Text>{application.status.title}</Text>
                        </Info>

                        <Info>
                            <DetailsImage
                                source={DateIcon}
                            />
                            <Text size={14} color='#666'>Data da Candidatura: {application.createdAt}</Text>
                        </Info>

                        <Info>
                            <DetailsImage
                                source={ActiveIcon}
                            />

                            {application.active === 'yes' ? (
                                <Text size={14} color='#666'>Ativo: Sim</Text>
                            ) : (
                                <Text size={14} color='#666'>Ativo: Não</Text>
                            )}
                        </Info>
                    </>
                </DetailsContainer>
            </ModalBody>

            <Footer>
                <FooterContainer>
                    <FooterTextContainer>
                        <Text color='#666'>Avançar para</Text>
                        <Text size={20} weight='600'>a próxima etapa?</Text>
                    </FooterTextContainer>

                    <Button onPress={() => alert('Avançou')}>
                        Avançar
                    </Button>
                </FooterContainer>
            </Footer>
        </Modal>
    );
}
