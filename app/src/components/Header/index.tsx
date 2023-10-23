import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Container, Content, ApplicationHeader } from './styles';

interface HeaderProps {
    selectedInfos: {
        title: string;
        company: string;
    };
    onCancelApplication: () => void;
}

export function Header({ selectedInfos, onCancelApplication }: HeaderProps) {
    const ApplicationHeaderText = 'Eba, uma candiatura :)';

    return (
        <Container>
            {(!selectedInfos.title || !selectedInfos.company) && (
                <>
                    <Text size={14} opacity={0.9}>Bem vindo(a) ao</Text>

                    <Text size={24} weight="700" color='#68DDBD'>
                        Conecta
                        <Text size={24} color='#68DDBD'>Jobs</Text>
                    </Text>
                </>
            )}

            {(selectedInfos.title || selectedInfos.company) && (
                <Content>
                    <ApplicationHeader>
                        <Text size={24} weight='600' color='#68DDBD'>{ApplicationHeaderText}</Text>

                        <TouchableOpacity onPress={onCancelApplication}>
                            <Text color='#D73035'>Cancelar</Text>
                        </TouchableOpacity>
                    </ApplicationHeader>
                </Content>
            )}
        </Container>
    );
}
