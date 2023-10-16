
import { FlatList } from 'react-native';

import { ApplicationIcon } from '../../assets/Icons/ApplicationIcon';

import { status } from '../../mocks/status';
import { Text } from '../Text';

import { Icon, Status } from './styles';

export function StatusComponent() {
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={status}
            contentContainerStyle={{ paddingRight: 24 }}
            keyExtractor={status => status._id}
            renderItem={({ item: status }) => (
                <Status>
                    <Icon>
                        <ApplicationIcon />
                    </Icon>

                    <Text>{status.title}</Text>
                </Status>
            )}
        />
    );
}
