import { useState } from 'react';

import { Text } from '../Text';

import { Button } from '../Button';

import { ApplicationConfirmedModal } from '../ApplicationConfirmedModal';

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
    onConfirmApplication: () => void;
}

export function Confirmation({ selectedInfos, onConfirmApplication }: ConfirmationProps) {
    const [isLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    function handleConfirmApplication() {
        setIsModalVisible(true);
    }

    function handleOk() {
        onConfirmApplication();
        setIsModalVisible(false);
    }

    return (
        <>
            <ApplicationConfirmedModal
                visible={isModalVisible}
                onOk={handleOk}
            />

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

                <Button
                    onPress={handleConfirmApplication}
                    loading={isLoading}
                >
                    Confirmar
                </Button>
            </Summary>
        </>
    );
}
