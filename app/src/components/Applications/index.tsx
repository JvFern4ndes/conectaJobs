import { useState } from 'react';
import { FlatList } from 'react-native';

import { Text } from '../Text';

import { Application } from '../../types/Application';

import CompanyIcon from '../../assets/images/CompanyIcon.png';
import DateIcon from '../../assets/images/DateIcon.png';
import ActiveIcon from '../../assets/images/ActiveIcon.png';
import ArrowCircle from '../../assets/images/ArrowCircle.png';

import {
    ApplicationContainer,
    ApplicationDetails,
    Information,
    Image,
    Separator,
    ChangeStatusButton
} from './styles';

import { ApplicationModal } from '../ApplicationModal';

interface ApplicationsProps {
    applications: Application[];
}

export function Applications({ applications }: ApplicationsProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedApplication, setSelectedApplication] = useState<null | Application>(null);

    function handleOpenModal(application: Application) {
        setIsModalVisible(true);
        setSelectedApplication(application);
    }

    return (
        <>
            <ApplicationModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                application={selectedApplication}
            />

            <FlatList
                data={applications}
                style={{ marginTop: 32 }}
                contentContainerStyle={{ paddingHorizontal: 24 }}
                keyExtractor={application => application._id}
                ItemSeparatorComponent={Separator}
                renderItem={({ item: application }) => (
                    <ApplicationContainer onPress={() => handleOpenModal(application)}>
                        <ApplicationDetails>
                            <Text weight='600' style={{ marginBottom: 16 }}>{application.title}</Text>
                            <Information style={{ marginVertical: 8 }}>
                                <Image
                                    source={CompanyIcon}
                                />
                                <Text size={14} color='#666'>Empresa: {application.company}</Text>
                            </Information>
                            <Information>
                                <Image
                                    source={DateIcon}
                                />
                                <Text size={14} color='#666'>Data da Candidatura: {application.createdAt}</Text>
                            </Information>
                            <Information style={{ marginVertical: 8 }}>
                                <Image
                                    style={{ height: 11 }}
                                    source={ActiveIcon}
                                />
                                {application.active === 'yes' ? (
                                    <Text size={14} color='#666'>Ativo: Sim</Text>
                                ) : (
                                    <Text size={14} color='#666'>Ativo: Não</Text>
                                )}
                            </Information>
                        </ApplicationDetails>

                        <ChangeStatusButton>
                            <Image source={ArrowCircle} />
                        </ChangeStatusButton>
                    </ApplicationContainer>
                )}
            />
        </>
    );
}
