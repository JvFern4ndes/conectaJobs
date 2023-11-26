
import { useState } from 'react';
import { FlatList } from 'react-native';

import { Text } from '../Text';

import { Icon, StatusContainer, Image } from './styles';
import { Status } from '../../types/Status';

interface StatusProps {
    status: Status[];
    onSelectStatus: (statusId: string) => Promise<void>;
}

export function StatusComponent({ status, onSelectStatus }: StatusProps) {
    const [selectedStatus, setSelectedStatus] = useState('');

    function handleSelectStatus(statusId: string) {
        const status = selectedStatus === statusId ? '' : statusId;

        onSelectStatus(status);
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
                    <StatusContainer onPress={() => handleSelectStatus(status._id)}>
                        <Icon>
                            <Image
                                style={{ opacity: isSelected ? 1 : 0.5 }}
                                source={{
                                    uri: `${process.env.REACT_APP_LOCAL_SERVER_PORT_BASE_URL}/uploads/${status.imagePath}`,
                                }}
                            />
                        </Icon>

                        <Text style={{ opacity: isSelected ? 1 : 0.5 }} >{status.title}</Text>
                    </StatusContainer>
                );
            }}
        />
    );
}
