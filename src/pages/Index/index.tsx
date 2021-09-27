import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {emitter} from '../../utils/EventEmiter';

const Index = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View>
      <Text
        onPress={() => {
          emitter.emit<string>('test', 'hello');
          navigation.push('Login');
        }}>
        Index
      </Text>
    </View>
  );
};

export default Index;
