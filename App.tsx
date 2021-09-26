/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import Index from './src/pages/Index';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const {Screen, Navigator} = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar
          barStyle={'light-content'}
          translucent={true}
          backgroundColor={'transparent'}
        />
        <Navigator
          initialRouteName={'Index'}
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Screen name={'Index'} component={Index} options={{title: 'Index'}} />
          <Screen
            name={'Login'}
            component={Login}
            options={{gestureEnabled: false, headerShown: false}}
          />
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
// const styles = StyleSheet.create({
//   navigationBar: {
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     elevation: 0,
//     shadowOpacity: 0,
//   },
//   navigationTitle: {
//     fontSize: 17,
//     fontWeight: 'bold',
//     marginHorizontal: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;
