import { Modal } from 'react-native';

import { Text } from '../Text';
import { Application } from '../../types/Application';

interface ApplicationModalProps {
    visible: boolean;
    onClose: () => void;
    application: null | Application;
}

export function ApplicationModal({ visible, onClose, application }: ApplicationModalProps) {
    return (
        <Modal
            visible={visible}
            animationType='slide'
            presentationStyle='pageSheet'
            onRequestClose={onClose}
        >
            <Text>ApplicationModal</Text>
        </Modal>
    );
}
