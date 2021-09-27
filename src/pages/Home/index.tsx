import TabBar from '../../components/TabBar';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Friends from '../Friends';
import Index from '../Index';
const {Screen, Navigator} = createBottomTabNavigator();

const Home = () => {
  return (
    <>
      <Navigator
        tabBar={props => <TabBar {...props} />}
        initialRouteName={'Index'}>
        <Screen
          name={'Index'}
          getComponent={() => Index}
          options={{headerShown: false}}
        />
        <Screen
          name={'Friends'}
          getComponent={() => Friends}
          options={{headerShown: false}}
        />
      </Navigator>
    </>
  );
};

export default Home;
