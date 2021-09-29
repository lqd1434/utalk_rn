import React from 'react';
import {Circle, Text, View, Heading} from 'native-base';
import {StyleSheet, useWindowDimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AlbumIcon, BackIcon} from '../../lib/icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PlayIcon from './components/PlayIcon';

const PlayPage = () => {
  const {width} = useWindowDimensions();
  const {top} = useSafeAreaInsets();
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      locations={[0, 0.2, 0.7, 1]}
      colors={['#7F7FDA', '#8787D2', '#7E83CB', '#A1A1EB']}
      style={[styles.con, {paddingTop: top}]}>
      <View height={60} alignSelf={'flex-start'}>
        <Circle
          size={50}
          backgroundColor={'#ADB1F0'}
          borderRadius={25}
          ml={5}
          mt={3}>
          <BackIcon color={'#5660E0'} />
        </Circle>
      </View>
      <View
        h={width / 2}
        mt={16}
        mb={6}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}>
        <AlbumIcon size={width / 2} />
      </View>
      <View style={styles.musicInfo}>
        <Heading color={'#FFFFFF'} mb={2}>
          Stuttering
        </Heading>
        <View display={'flex'} alignItems={'center'} flexDirection={'row'}>
          <Text color={'#B2B6EB'}>Fefe Dobson</Text>
          <View
            backgroundColor={'#B2B6EB'}
            px={2}
            py={1}
            borderRadius={20}
            ml={2}>
            <Text fontSize={10}>关注</Text>
          </View>
        </View>
        <Text color={'#D8DAF8'} fontSize={18} mt={6} mb={2}>
          这是一句歌词
        </Text>
        <Text color={'#D8DAF8'} fontSize={18}>
          这是一首简单的小情歌
        </Text>
      </View>
      <View style={styles.optionIcons} />
      <View style={styles.playIcons}>
        <PlayIcon />
      </View>
    </LinearGradient>
  );
};

export default PlayPage;

const styles = StyleSheet.create({
  con: {
    backgroundColor: '#F7DC4F',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  musicInfo: {
    alignSelf: 'flex-start',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 20,
  },
  optionIcons: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  playIcons: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconBg: {
    backgroundColor: '#B2B6EB',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
  },
  outer: {
    width: 65,
    height: 65,
    borderRadius: 100,
    backgroundColor: '#A8A7EF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    width: 58,
    height: 58,
    borderRadius: 100,
    backgroundColor: '#8289E8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
