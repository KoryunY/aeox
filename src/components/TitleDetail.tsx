import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type TitleDetailRouteProp = RouteProp<RootStackParamList, 'TitleDetail'>;
type TitleDetailNavigationProp = StackNavigationProp<RootStackParamList, 'TitleDetail'>;

type Props = {
    route: TitleDetailRouteProp;
    navigation: TitleDetailNavigationProp;
};

const TitleDetail: React.FC<Props> = ({ route, navigation }) => {
    const { title } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Button title="Button 1" onPress={() => { }} />
            <Button title="Button 2" onPress={() => { }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default TitleDetail;
