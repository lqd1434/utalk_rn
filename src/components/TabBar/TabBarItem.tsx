import React, {useState} from 'react';
import {VStack, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationHelpers, ParamListBase} from '@react-navigation/native';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {useTabStore} from '../../zustandStore';

interface TabBarItemProps {
  icon: string;
  title: string;
  route: string;
  navigation:
    | NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
    | any;
}

const TabBarItem: React.FC<TabBarItemProps> = ({
  navigation,
  icon,
  title,
  route,
}) => {
  const {currentTab, setCurrentTab} = useTabStore(state => state);
  const [isFocused, setFocused] = useState(false);
  const doJump = (route: string) => {
    setCurrentTab(route);
    navigation.navigate(route);
  };

  const onPressOut = () => {
    setFocused(false);
    console.log('onPressOut');
  };
  const onPressIn = () => {
    setFocused(true);
    console.log('onPressIn');
  };

  return (
    <TouchableOpacity
      onPress={() => doJump(route)}
      onPressOut={onPressOut}
      onPressIn={onPressIn}>
      <VStack
        space={0}
        style={isFocused ? styles.tabFocused : styles.tabNormal}
        alignItems="center">
        <Icon name={icon} size={30} color={'#8787D2'} />
        <Text color={'#8787D2'}>{title}</Text>
      </VStack>
    </TouchableOpacity>
  );
};

export default TabBarItem;

const styles = StyleSheet.create({
  tabNormal: {
    transform: [{scale: 1}],
  },
  tabFocused: {
    transform: [{scale: 0.8}],
  },
});
