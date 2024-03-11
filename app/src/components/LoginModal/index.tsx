import React, { useState } from 'react';
import { Footer, Image, Input, ModalBody } from './styles';
import { Button } from '../Button';
import { Modal } from 'react-native';

import LoginLogo from '../../assets/images/LoginLogo.png';

interface LoginModalProps {
    visible: boolean;
    onPress: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ visible, onPress }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const isLoginButtonDisabled = !username || !password;

    const handleUsernameChange = (text: string) => {
        setUsername(text);
    };

    const handlePasswordChange = (text: string) => {
        setPassword(text);
    };

    const handleLoginPress = () => {
        onPress();
    };

    return (
        <Modal
            visible={visible}
            animationType='slide'
            presentationStyle='pageSheet'
            onRequestClose={onPress}
        >
            <ModalBody>
                <Image source={LoginLogo} resizeMode='contain'></Image>
                <Input
                    placeholder='Usuário'
                    value={username}
                    onChangeText={handleUsernameChange}
                ></Input>
                <Input
                    placeholder='Senha'
                    value={password}
                    onChangeText={handlePasswordChange}
                    secureTextEntry
                ></Input>
            </ModalBody>

            <Footer>
                <Button onPress={handleLoginPress} disabled={isLoginButtonDisabled}>
                Entrar
                </Button>
            </Footer>
        </Modal>
    );
};

export default LoginModal;
