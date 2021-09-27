import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {memo, FC} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useTabStore} from '../../zustandStore';
import {HStack, VStack} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props extends BottomTabBarProps {}

const TabBar: FC<Props> = ({navigation}) => {
  const {currentTab, setCurrentTab} = useTabStore(state => state);
  console.log(currentTab);

  const doJump = (route: string) => {
    setCurrentTab(route);
    navigation.navigate(route);
  };

  return (
    <View style={styles.tabBar}>
      <HStack
        mx={3}
        space={3}
        flex={1}
        alignItems="center"
        justifyContent={'space-around'}>
        <TouchableOpacity onPress={() => doJump('Index')}>
          <VStack space={0} alignItems="center">
            <Icon name={'home'} size={30} color="#8787D2" />
            <Text>首页</Text>
          </VStack>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => doJump('Friends')}>
          <VStack space={0} alignItems="center">
            <Icon name={'people'} size={30} color="#4C9900" />
            <Text>好友</Text>
          </VStack>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => doJump('Index')}>
          <VStack space={0} alignItems="center">
            <Icon name={'public'} size={30} color="#0080FF" />
            <Text onPress={() => doJump('Friends')}>社区</Text>
          </VStack>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => doJump('Friends')}>
          <VStack space={0} alignItems="center">
            <Icon name={'lock'} size={30} color="#FA6C37" />
            <Text onPress={() => doJump('Friends')}>隐私</Text>
          </VStack>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => doJump('Index')}>
          <VStack
            space={0}
            alignItems="center"
            py={1}
            px={3}
            backgroundColor={'#E3ECEE'}>
            <Icon name={'face'} size={30} color="#906C37" />
            <Text onPress={() => doJump('Friends')}>我的</Text>
          </VStack>
        </TouchableOpacity>
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
  },
});
