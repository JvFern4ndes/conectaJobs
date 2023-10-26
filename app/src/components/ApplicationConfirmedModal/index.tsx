import { Modal } from 'react-native';

import { CheckCircle } from '../../assets/Icons/CheckCircle';

import { Text } from '../Text';

import { Container, OkButton } from './styles';

interface ApplicationConfirmedModalProps {
    visible: boolean;
    onOk: () => void;
}

export function ApplicationConfirmedModal({ visible, onOk }: ApplicationConfirmedModalProps) {
    return (
        <Modal
            visible={visible}
            animationType='fade'
        >
            <Container>
                <CheckCircle />

                <Text size={20} weight='600' color='#fff' style={{ marginTop: 12 }}>
                    Candidatura confirmada
                </Text>
                <Text color='#fff' opacity={0.9} style={{ marginTop: 4 }}>
                    A candidatura já entrou na lista de candidaturas
                </Text>

                <OkButton onPress={onOk}>
                    <Text color='#68DDBD' weight='600'>
                        OK
                    </Text>
                </OkButton>
            </Container>
        </Modal>
    );
}
