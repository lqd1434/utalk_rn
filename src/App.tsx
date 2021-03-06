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
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/Login';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './pages/Home';
import {NativeBaseProvider} from 'native-base';
import PlayPage from './pages/Play';
import {emitter} from './utils/EventEmiter';

const {Screen, Navigator} = createStackNavigator();

const App = () => {
  const config = {
    dependencies: {
      'linear-gradient': require('react-native-linear-gradient').default,
    },
  };

  const handleScreenChange = (state: any) => {
    const index = state.data.state.index;
    emitter.emit<boolean>('showFAB', index === 0);
  };
  return (
    <SafeAreaProvider>
      <NativeBaseProvider config={config}>
        <NavigationContainer>
          <StatusBar
            barStyle={'dark-content'}
            translucent={true}
            backgroundColor={'transparent'}
          />
          <Navigator
            screenListeners={{
              state: handleScreenChange,
            }}
            initialRouteName={'Home'}
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
            <Screen
              name={'Home'}
              component={Home}
              options={{gestureEnabled: false, headerShown: false}}
            />
            <Screen
              name={'Login'}
              component={Login}
              options={{gestureEnabled: false, headerShown: false}}
            />
            <Screen
              name={'PlayPage'}
              component={PlayPage}
              options={{gestureEnabled: false, headerShown: false}}
            />
          </Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

export default App;
