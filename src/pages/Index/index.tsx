import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';

const Index = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View>
      <Text onPress={() => navigation.push('Login')}>Index</Text>
    </View>
  );
};

export default Index;
