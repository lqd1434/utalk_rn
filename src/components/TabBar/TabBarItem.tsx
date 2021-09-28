import React, {useState} from 'react';
import {VStack, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {NavigationHelpers, ParamListBase} from '@react-navigation/native';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {useTabStore} from '../../zustandStore';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

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
  const size = useSharedValue(1);

  const onPressOut = (e: GestureResponderEvent) => {
    setTimeout(() => {
      size.value = withTiming(1, {duration: 200});
    }, 150);
    e.stopPropagation();
    console.log(route);
    if (route !== currentTab) {
      setCurrentTab(route);
      navigation.navigate(route);
    }
    console.log('onPressOut', size);
  };

  const onPressIn = () => {
    // setFocused(true);
    size.value = withTiming(0.9, {duration: 200});
    console.log('onPressIn', size);
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{scale: size.value}],
    };
  });

  return (
    <TouchableWithoutFeedback onPressOut={onPressOut} onPressIn={onPressIn}>
      <Animated.View style={[animatedStyles]}>
        <VStack
          space={0}
          backgroundColor={'#E3ECEE'}
          px={3}
          // style={isFocused ? styles.tabFocused : styles.tabNormal}
          alignItems="center">
          <Icon name={icon} size={30} color={'#8787D2'} />
          <Text onPressOut={onPressOut} onPressIn={onPressIn} color={'#8787D2'}>
            {title}
          </Text>
        </VStack>
      </Animated.View>
    </TouchableWithoutFeedback>
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
