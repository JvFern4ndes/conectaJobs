import React, { useState } from 'react';
import { ModalBody, Overlay } from './styles';

import logo from '../../assets/images/logo.svg';

interface LoginModalProps {
  onPress: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ onPress }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const handleLogin = () => {
    onPress();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }

    // Verificar se ambos os campos estão preenchidos para habilitar o botão
    setIsButtonDisabled(username === '' || password === '');
  };

  return (
    <Overlay>
        <ModalBody>
            <img src={logo} />

            <input
                type="text"
                id="username"
                name="username"
                placeholder='Usuário'
                value={username}
                onChange={handleInputChange}
            />

            <input
                style={{ marginTop: 16 }}
                type="password"
                id="password"
                name="password"
                placeholder='Senha'
                value={password}
                onChange={handleInputChange}
            />

            <button className={isButtonDisabled ? 'disabled' : ''} onClick={handleLogin} disabled={isButtonDisabled}>
                Entrar
            </button>
        </ModalBody>
    </Overlay>
  );
};

export default LoginModal;
