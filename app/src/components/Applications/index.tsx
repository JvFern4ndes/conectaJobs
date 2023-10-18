import { FlatList } from 'react-native';

import { applications } from '../../mocks/applications';
import { Text } from '../Text';

import ComapnyIcon from '../../assets/images/CompanyIcon.png';
import DateIcon from '../../assets/images/DateIcon.png';
import ActiveIcon from '../../assets/images/ActiveIcon.png';
import ArrowCircle from '../../assets/images/ArrowCircle.png';

import {
    Application,
    ApplicationDetails,
    Information,
    Image,
    Separator,
    ChangeStatusButton
} from './styles';

export function Applications() {
    return (
        <FlatList
            data={applications}
            style={{ marginTop: 32 }}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            keyExtractor={application => application._id}
            ItemSeparatorComponent={Separator}
            renderItem={({ item: application }) => (
                <Application>
                    <ApplicationDetails>
                        <Text weight='600' style={{ marginBottom: 16 }}>{application.title}</Text>
                        <Information style={{ marginVertical: 8 }}>
                            <Image
                                source={ComapnyIcon}
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
                            <Text size={14} color='#666'>Ativo: {application.active}</Text>
                        </Information>
                    </ApplicationDetails>

                    <ChangeStatusButton>
                        <Image source={ArrowCircle} />
                    </ChangeStatusButton>
                </Application>
            )}
        />
    );
}
