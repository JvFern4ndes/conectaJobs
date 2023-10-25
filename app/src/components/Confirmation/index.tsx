import { Text } from '../Text';

import { Button } from '../Button';

import {
    InfosContainer,
    Infos,
    ImageInfo,
    InfoTexts,
    Summary,
    QuestionContainer,
} from './styles';

import OcupationIcon from '../../assets/images/OcupationIcon.png';
import CompanyIcon from '../../assets/images/CompanyIcon.png';

interface ConfirmationProps {
    selectedInfos: {
        title: string;
        company: string;
    }
}

export function Confirmation({ selectedInfos }: ConfirmationProps) {
    return (
        <>
            <InfosContainer>
                <Infos>
                    <ImageInfo source={OcupationIcon} />
                    <InfoTexts>
                        <Text color='#FF69B4' weight='600'>Cargo: </Text>
                        <Text>{selectedInfos.title}</Text>
                    </InfoTexts>
                </Infos>
                <Infos>
                    <ImageInfo source={CompanyIcon} />
                    <InfoTexts>
                        <Text color='#FF69B4' weight='600'>Empresa: </Text>
                        <Text>{selectedInfos.company}</Text>
                    </InfoTexts>
                </Infos>
            </InfosContainer>

            <Summary>
                <QuestionContainer>
                    <Text color='#666'>Confirmar</Text>
                    <Text size={20} weight='600'>Candidatura?</Text>
                </QuestionContainer>

                <Button onPress={() => alert('Confirmar candidatura')}>
                    Confirmar
                </Button>
            </Summary>
        </>
    );
}
