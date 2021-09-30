import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Shadow} from 'react-native-neomorph-shadows';
import {PlayIcon as Play, PauseIcon as Pause} from '../../../lib/icons';
import {TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const PlayIcon = () => {
  const [playing, setPlay] = useState(false);

  const aniValue = useSharedValue(1);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{scale: aniValue.value}],
      opacity: aniValue.value,
    };
  });
  const onPress = () => {
    aniValue.value = withTiming(0, {duration: 300});
    setTimeout(() => {
      setPlay(!playing);
      aniValue.value = withTiming(1, {duration: 300});
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
          backgroundColor: '#CECEF1',
          shadowRadius: 20,
          elevation: 10,
          borderColor: '#FFF',
          borderWidth: 1,
          borderStyle: 'solid',
          width: 85,
          height: 85,
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
            width: 70,
            height: 70,
            borderRadius: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 10,
            shadowColor: '#8289E8',
            shadowOffset: {width: -10, height: -10},
          }}>
          <LinearGradient
            colors={['#6765CB', '#ADB1F0']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            locations={[0.2, 1]}
            style={{
              backgroundColor: '#FFFFFF',
              width: 58,
              height: 58,
              borderRadius: 100,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: playing ? 0 : 5,
            }}>
            <Animated.View style={animatedStyles}>
              {playing ? <Pause /> : <Play />}
            </Animated.View>
          </LinearGradient>
        </LinearGradient>
      </Shadow>
    </TouchableWithoutFeedback>
  );
};

export default PlayIcon;
