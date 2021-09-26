import {View, StyleSheet, Text} from 'react-native';
import React, {memo} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

interface Props extends BottomTabBarProps {}

const TabBar: React.FC<Props> = ({navigation}) => {
  console.log(navigation);
  return (
    <View style={styles.tabBar}>
      <Text>首页</Text>
      <Text>社区</Text>
      <Text>生活</Text>
      <Text>我的</Text>
    </View>
  );
};

export default memo(TabBar);

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
