import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type RegisterPageNavigationProp = StackNavigationProp<RootStackParamList, 'RegisterPage'>;

type Props = {
    navigation: RegisterPageNavigationProp;
};

const RegisterPage: React.FC<Props> = ({ navigation }) => {
    const [username, setUsername] = useState('');

    const handleRegister = async () => {
        if (username.trim()) {
            await AsyncStorage.setItem('username', username);
            navigation.replace('ProfilePage');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <Button title="Register" onPress={handleRegister} />
            <Button title="Go to Login" onPress={() => navigation.navigate('LoginPage')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        marginBottom: 20,
    },
});

export default RegisterPage;
