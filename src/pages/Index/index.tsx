import {useWindowDimensions} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Shadow} from 'react-native-neomorph-shadows';

interface Props extends BottomTabBarProps {}

const Index: React.FC<Props> = () => {
  console.log(useWindowDimensions());
  return (
    <Shadow
      useArt // <- set this prop to use non-native shadow on ios
      style={{
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowColor: '#CCCCCC',
        shadowRadius: 20,
        borderRadius: 20,
        margin: 50,
        backgroundColor: 'white',
        width: 100,
        height: 100,
        // ...include most of View/Layout styles
      }}
    />
  );
};

export default Index;
