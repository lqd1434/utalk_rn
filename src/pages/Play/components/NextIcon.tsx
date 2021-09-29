import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Shadow} from 'react-native-neomorph-shadows';
import {NextIcon as Next} from '../../../lib/icons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {TouchableWithoutFeedback} from 'react-native';

const NextIcon = () => {
  const aniValue = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: aniValue.value}],
    };
  });
  const onPress = () => {
    aniValue.value = withTiming(5, {duration: 300});
    setTimeout(() => {
      aniValue.value = withTiming(-5, {duration: 500});
      setTimeout(() => {
        aniValue.value = withTiming(0, {duration: 300});
      }, 300);
    }, 300);
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Shadow
        useArt
        inner
        style={{
          shadowOffset: {width: -10, height: -10},
          shadowOpacity: 1,
          shadowColor: '#8289E8',
          backgroundColor: '#FFFFFF',
          shadowRadius: 20,
          elevation: 10,
          borderColor: '#FFF',
          borderWidth: 1,
          borderStyle: 'solid',
          width: 70,
          height: 70,
          borderRadius: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LinearGradient
          colors={['#A8A7EF', '#6765CB']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0.7, 1]}
          style={{
            backgroundColor: '#FFFFFF',
            width: 60,
            height: 60,
            borderRadius: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 10,
            shadowColor: '#8289E8',
            shadowOffset: {width: -10, height: -10},
            shadowRadius: 10,
            shadowOpacity: 1,
          }}>
          <LinearGradient
            colors={['#6765CB', '#ADB1F0']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            locations={[0.2, 1]}
            style={{
              backgroundColor: '#FFFFFF',
              width: 48,
              height: 48,
              borderRadius: 100,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Animated.View style={animatedStyles}>
              <Next />
            </Animated.View>
          </LinearGradient>
        </LinearGradient>
      </Shadow>
    </TouchableWithoutFeedback>
  );
};

export default NextIcon;
