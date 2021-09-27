import {Text} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {View} from 'native-base';

interface Props extends BottomTabBarProps {}

const Friends: React.FC<Props> = () => {
  return (
    <View mt={25} flex={1} backgroundColor={'#3296FA'}>
      <Text>Friends</Text>
    </View>
  );
};

export default Friends;
