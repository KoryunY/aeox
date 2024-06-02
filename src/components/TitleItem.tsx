import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
    title: string;
    onPress: () => void;
};

const TitleItem: React.FC<Props> = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
            <Text style={styles.itemText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#ddd',
        borderRadius: 5,
    },
    itemText: {
        fontSize: 18,
    },
});

export default TitleItem;
