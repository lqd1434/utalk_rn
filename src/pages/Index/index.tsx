import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {View} from 'native-base';

interface Props extends BottomTabBarProps {}

const Index: React.FC<Props> = () => {
  return (
    <View mt={25} flex={1} backgroundColor={'#7F00FF'}>
      <TouchableOpacity>
        <View>
          <Text>Index</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
