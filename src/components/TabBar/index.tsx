import {View, StyleSheet} from 'react-native';
import React, {memo, FC} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {HStack} from 'native-base';
import TabBarItem from './TabBarItem';

interface Props extends BottomTabBarProps {}

const TabBar: FC<Props> = ({navigation}) => {
  return (
    <View style={styles.tabBar}>
      <HStack
        mx={3}
        space={3}
        flex={1}
        alignItems="center"
        justifyContent={'space-around'}>
        <TabBarItem
          icon={'home'}
          navigation={navigation}
          route={'Index'}
          title={'首页'}
        />
        <TabBarItem
          icon={'people'}
          navigation={navigation}
          route={'Friends'}
          title={'好友 '}
        />
        <TabBarItem
          icon={'public'}
          navigation={navigation}
          route={'Index'}
          title={'社区'}
        />
        <TabBarItem
          icon={'lock'}
          navigation={navigation}
          route={'Friends'}
          title={'隐私'}
        />
        <TabBarItem
          icon={'face'}
          navigation={navigation}
          route={'Index'}
          title={'我的'}
        />
      </HStack>
    </View>
  );
};

export default memo(TabBar);

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    transform: [{scale: 1}],
  },
});
