import TabBar from '../../components/TabBar';
import React, {useLayoutEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import Friends from '../Friends';
import Index from '../Index';
import {Fab, Icon} from 'native-base';
import {AlbumIcon} from '../../lib/icons';
import {useNavigation} from '@react-navigation/native';
import {emitter} from '../../utils/EventEmiter';
const {Screen, Navigator} = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<any, 'Home'>>();
  const [showFAB, setShowFAB] = useState(true);

  const onPressFab = () => {
    navigation.navigate('PlayPage');
  };

  useLayoutEffect(() => {
    emitter.on<boolean>('showFAB', data => {
      setShowFAB(data);
    });
  }, []);
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
      {showFAB && (
        <Fab
          onPress={onPressFab}
          right={50}
          bottom={100}
          backgroundColor={'#7F7FDA'}
          icon={<Icon as={<AlbumIcon size={16} />} />}
        />
      )}
    </>
  );
};

export default Home;
