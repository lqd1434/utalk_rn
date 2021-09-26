import TabBar from '../../components/TabBar';
import Login from '../Login';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const {Screen, Navigator} = createBottomTabNavigator();

const Home = () => {
  return (
    <>
      <Navigator
        tabBar={props => <TabBar {...props} />}
        initialRouteName={'Login'}>
        <Screen name={'Login'} getComponent={() => Login} />
      </Navigator>
    </>
  );
};

export default Home;
