import { Modal, TouchableOpacity, Platform } from 'react-native';
import { Close } from '../../assets/Icons/Close';
import { Button } from '../Button';

import { Text } from '../Text';

import { ModalBody, Overlay, Header, Form, Input } from './styles';
import { useState } from 'react';

interface CreateApplicationModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: (title: string, company: string) => void;
}

export function CreateApplicationModal({ visible, onClose, onSave }: CreateApplicationModalProps) {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');

    function handleSave() {
        setTitle('');
        setCompany('');
        onSave(title, company);
        onClose();
    }

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
                            onChangeText={setTitle}
                        />

                        <Input
                            style={{ marginBottom: 24 }}
                            placeholder='Empresa'
                            placeholderTextColor="#666"
                            onChangeText={setCompany}
                        />

                        <Button onPress={handleSave} disabled={title.length === 0 || company.length === 0}>
                            Candidatar-se
                        </Button>
                    </Form>
                </ModalBody>
            </Overlay>
        </Modal>
    );
}
