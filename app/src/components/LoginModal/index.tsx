import { Modal } from 'react-native';

import {
    ModalBody,
    Footer,
    Input,
} from './styles';

import { Text } from '../Text';

import { Button } from '../Button';

interface ApplicationModalProps {
    visible: boolean;
    onPress: () => void;
}

export function LoginModal({ visible, onPress, }: ApplicationModalProps) {

    return (
        <Modal
            visible={visible}
            animationType='slide'
            presentationStyle='pageSheet'
            onRequestClose={onPress}
        >
            <ModalBody>
                <Text
                    style={{ marginBottom: 120 }}
                    size={48}
                    color=''
                >
                    ConectaJobs
                </Text>
                <Input placeholder='Usuário'></Input>
                <Input placeholder='Senha'></Input>
            </ModalBody>

            <Footer>
                <Button onPress={onPress}>
                    Entrar
                </Button>
            </Footer>
        </Modal>
    );
}
