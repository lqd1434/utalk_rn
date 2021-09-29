import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Shadow} from 'react-native-neomorph-shadows';
import {PlayIcon as Play} from '../../../lib/icons';

const PlayIcon = () => {
  return (
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
          }}>
          <Play />
        </LinearGradient>
      </LinearGradient>
    </Shadow>
  );
};

export default PlayIcon;
