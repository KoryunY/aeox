// // import { StatusBar } from 'expo-status-bar';
// // import { StyleSheet, Text, View } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <Text>Open up App.tsx to start working on your app!</Text>
// //       <StatusBar style="auto" />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import ProfilePage from './src/components/ProfilePage';
// import TitleDetail from './src/components/TitleDetail';

// export type RootStackParamList = {
//   ProfilePage: undefined;
//   TitleDetail: { title: string };
// };

// const Stack = createStackNavigator<RootStackParamList>();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="ProfilePage">
//         <Stack.Screen name="ProfilePage" component={ProfilePage} />
//         <Stack.Screen name="TitleDetail" component={TitleDetail} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfilePage from './src/components/ProfilePage';
import TitleDetail from './src/components/TitleDetail';
import RegisterPage from './src/components/RegisterPage';
import LoginPage from './src/components/LoginPage';

export type RootStackParamList = {
  RegisterPage: undefined;
  LoginPage: undefined;
  ProfilePage: undefined;
  TitleDetail: { title: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const username = await AsyncStorage.getItem('username');
      setIsLoggedIn(username !== null);
    };
    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "ProfilePage" : "RegisterPage"}>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="ProfilePage" component={ProfilePage} />
            <Stack.Screen name="TitleDetail" component={TitleDetail} />
          </>
        ) : (
          <>
            <Stack.Screen name="RegisterPage" component={RegisterPage} />
            <Stack.Screen name="LoginPage" component={LoginPage} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
