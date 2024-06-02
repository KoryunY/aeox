// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../../App';

// type LoginPageNavigationProp = StackNavigationProp<RootStackParamList, 'LoginPage'>;

// type Props = {
//     navigation: LoginPageNavigationProp;
// };

// const LoginPage: React.FC<Props> = ({ navigation }) => {
//     const [username, setUsername] = useState('');

//     const handleLogin = async () => {
//         const storedUsername = await AsyncStorage.getItem('username');
//         if (storedUsername === username) {
//             navigation.replace('ProfilePage');
//         } else {
//             alert('Username not found');
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Login</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Username"
//                 value={username}
//                 onChangeText={setUsername}
//             />
//             <Button title="Login" onPress={handleLogin} />
//             <Button title="Go to Register" onPress={() => navigation.navigate('RegisterPage')} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//     },
//     title: {
//         fontSize: 24,
//         marginBottom: 20,
//     },
//     input: {
//         width: '100%',
//         padding: 10,
//         borderWidth: 1,
//         marginBottom: 20,
//     },
// });

// export default LoginPage;
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type LoginPageNavigationProp = StackNavigationProp<RootStackParamList, 'LoginPage'>;

type Props = {
    navigation: LoginPageNavigationProp;
};

const LoginPage: React.FC<Props> = ({ navigation }) => {
    const [username, setUsername] = useState('');

    const handleLogin = async () => {
        const storedUsername = await AsyncStorage.getItem('username');
        if (storedUsername === username) {
            navigation.replace('ProfilePage');
        } else {
            alert('Username not found');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <Button title="Login" onPress={handleLogin} />
            <Button title="Go to Register" onPress={() => navigation.navigate('RegisterPage')} />
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

export default LoginPage;
