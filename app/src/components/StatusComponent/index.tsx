
import { useState } from 'react';
import { FlatList } from 'react-native';

import { ApplicationIcon } from '../../assets/Icons/ApplicationIcon';

import { status } from '../../mocks/status';
import { Text } from '../Text';

import { Icon, Status } from './styles';

export function StatusComponent() {
    const [selectedStatus, setSelectedStatus] = useState('');

    function handleSelectStatus(statusId: string) {
        const status = selectedStatus === statusId ? '' : statusId;

        setSelectedStatus(status);
    }

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={status}
            contentContainerStyle={{ paddingRight: 24 }}
            keyExtractor={status => status._id}
            renderItem={({ item: status }) => {
                const isSelected = selectedStatus === status._id;

                return (
                    <Status onPress={() => handleSelectStatus(status._id)}>
                        <Icon>
                            <ApplicationIcon opacity={isSelected ? 1 : 0.5} />
                        </Icon>

                        <Text opacity={isSelected ? 1 : 0.5} >{status.title}</Text>
                    </Status>
                );
            }}
        />
    );
}
