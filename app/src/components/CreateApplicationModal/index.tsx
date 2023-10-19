import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Close } from '../../assets/Icons/Close';
import { Button } from '../Button';

import { Text } from '../Text';

import { ModalBody, Overlay, Header, Form, Input } from './styles';

interface CreateApplicationModalProps {
    visible: boolean;
    onClose: () => void;
}

export function CreateApplicationModal({ visible, onClose }: CreateApplicationModalProps) {


    return (
        <Modal
            visible={visible}
            transparent
            animationType='fade'
        >
            <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
                <ModalBody>
                    <Header>
                        <Text weight='600'>Informações da Vaga</Text>

                        <TouchableOpacity onPress={onClose}>
                            <Close color='#666' />
                        </TouchableOpacity>
                    </Header>

                    <Form>
                        <Input
                            placeholder='Cargo'
                            placeholderTextColor="#666"
                        />

                        <Input
                            style={{ marginBottom: 24 }}
                            placeholder='Empresa'
                            placeholderTextColor="#666"
                        />

                        <Button onPress={() => alert('Candidatou!')}>
                            Candidatar-se
                        </Button>
                    </Form>
                </ModalBody>
            </Overlay>
        </Modal>
    );
}
