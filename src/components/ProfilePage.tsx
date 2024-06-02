// // import React, { useState } from 'react';
// // import { View, Text, Button, FlatList, TextInput, StyleSheet } from 'react-native';
// // import { StackNavigationProp } from '@react-navigation/stack';
// // import { RootStackParamList } from '../../App';
// // import TitleItem from './TitleItem';

// // type ProfilePageNavigationProp = StackNavigationProp<RootStackParamList, 'ProfilePage'>;

// // type Props = {
// //     navigation: ProfilePageNavigationProp;
// // };

// // type Title = {
// //     id: string;
// //     title: string;
// // };

// // const ProfilePage: React.FC<Props> = ({ navigation }) => {
// //     const [titles, setTitles] = useState<Title[]>([]);
// //     const [newTitle, setNewTitle] = useState('');

// //     const addTitle = () => {
// //         if (newTitle.trim()) {
// //             setTitles([...titles, { id: titles.length.toString(), title: newTitle }]);
// //             setNewTitle('');
// //         }
// //     };

// //     return (
// //         <View style={styles.container}>
// //             <Text style={styles.profileText}>Profile Page</Text>
// //             <TextInput
// //                 style={styles.input}
// //                 placeholder="Add a new title"
// //                 value={newTitle}
// //                 onChangeText={setNewTitle}
// //             />
// //             <Button title="Add Title" onPress={addTitle} />
// //             <FlatList
// //                 data={titles}
// //                 keyExtractor={(item) => item.id}
// //                 renderItem={({ item }) => (
// //                     <TitleItem title={item.title} onPress={() => navigation.navigate('TitleDetail', { title: item.title })} />
// //                 )}
// //             />
// //         </View>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         padding: 20,
// //     },
// //     profileText: {
// //         fontSize: 24,
// //         fontWeight: 'bold',
// //         marginBottom: 20,
// //     },
// //     input: {
// //         borderWidth: 1,
// //         padding: 10,
// //         marginBottom: 10,
// //     },
// // });

// // export default ProfilePage;
// import React, { useState } from 'react';
// import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../../App';
// import TitleList from './TitleList';

// type ProfilePageNavigationProp = StackNavigationProp<RootStackParamList, 'ProfilePage'>;

// type Props = {
//     navigation: ProfilePageNavigationProp;
// };

// type Title = {
//     id: string;
//     title: string;
// };

// const ProfilePage: React.FC<Props> = ({ navigation }) => {
//     const [titles, setTitles] = useState<Title[]>([]);
//     const [newTitle, setNewTitle] = useState('');

//     const addTitle = () => {
//         if (newTitle.trim()) {
//             setTitles([...titles, { id: titles.length.toString(), title: newTitle }]);
//             setNewTitle('');
//         }
//     };

//     const handlePressItem = (title: string) => {
//         navigation.navigate('TitleDetail', { title });
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.profileText}>Profile Page</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Add a new title"
//                 value={newTitle}
//                 onChangeText={setNewTitle}
//             />
//             <Button title="Add Title" onPress={addTitle} />
//             <TitleList titles={titles} onPressItem={handlePressItem} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//     },
//     profileText: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     input: {
//         borderWidth: 1,
//         padding: 10,
//         marginBottom: 10,
//     },
// });

// export default ProfilePage;
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import TitleList from './TitleList';

type ProfilePageNavigationProp = StackNavigationProp<RootStackParamList, 'ProfilePage'>;

type Props = {
    navigation: ProfilePageNavigationProp;
};

type Title = {
    id: string;
    title: string;
};

const ProfilePage: React.FC<Props> = ({ navigation }) => {
    const [titles, setTitles] = useState<Title[]>([]);
    const [newTitle, setNewTitle] = useState('');

    const addTitle = () => {
        if (newTitle.trim()) {
            setTitles([...titles, { id: titles.length.toString(), title: newTitle }]);
            setNewTitle('');
        }
    };

    const handlePressItem = (title: string) => {
        navigation.navigate('TitleDetail', { title });
    };

    const handleLogout = async () => {
        await AsyncStorage.removeItem('username');
        navigation.replace('RegisterPage');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.profileText}>Profile Page</Text>
            <TextInput
                style={styles.input}
                placeholder="Add a new title"
                value={newTitle}
                onChangeText={setNewTitle}
            />
            <Button title="Add Title" onPress={addTitle} />
            <TitleList titles={titles} onPressItem={handlePressItem} />
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    profileText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
});

export default ProfilePage;
