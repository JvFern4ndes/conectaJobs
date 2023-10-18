
import { useState } from 'react';
import { FlatList } from 'react-native';

import { status } from '../../mocks/status';
import { Text } from '../Text';

import { Icon, Status, Image } from './styles';

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
                            <Image
                                style={{ opacity: isSelected ? 1 : 0.5 }}
                                source={{
                                    uri: `http://192.168.0.116:3001/uploads/${status.imagePath}`,
                                }}
                            />
                        </Icon>

                        <Text style={{ opacity: isSelected ? 1 : 0.5 }} >{status.title}</Text>
                    </Status>
                );
            }}
        />
    );
}
