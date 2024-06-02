import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import TitleItem from './TitleItem';

type Title = {
    id: string;
    title: string;
};

type Props = {
    titles: Title[];
    onPressItem: (title: string) => void;
};

const TitleList: React.FC<Props> = ({ titles, onPressItem }) => {
    return (
        <FlatList
            data={titles}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TitleItem title={item.title} onPress={() => onPressItem(item.title)} />
            )}
            style={styles.list}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
});

export default TitleList;
