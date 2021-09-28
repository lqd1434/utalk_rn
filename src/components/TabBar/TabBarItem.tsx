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
  withSpring,
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
  const [isFocused, setFocused] = useState(false);
  const size = useSharedValue(1);

  const doJump = (route: string) => {
    // setCurrentTab(route);
    // navigation.navigate(route);
    console.log(size);
  };
  // console.log(size);
  const onPressOut = (e: GestureResponderEvent) => {
    size.value = withSpring(1);
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
    size.value = withSpring(0.7);
    console.log('onPressIn', size);
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{scale: size.value}],
    };
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => doJump(route)}
      onPressOut={onPressOut}
      onPressIn={onPressIn}>
      <Animated.View style={[animatedStyles]}>
        <VStack
          space={0}
          backgroundColor={'#E3ECEE'}
          px={3}
          // style={isFocused ? styles.tabFocused : styles.tabNormal}
          alignItems="center">
          <Icon name={icon} size={30} color={'#8787D2'} />
          <Text
            onPress={() => doJump(route)}
            onPressOut={onPressOut}
            onPressIn={onPressIn}
            color={'#8787D2'}>
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
