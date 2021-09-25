/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  NativeModules,
  Dimensions,
  useWindowDimensions,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from './src/components/Input';

const {StatusBarManager} = NativeModules;

const App = () => {
  const [email, setEmail] = useState('');

  const inputRef1 = useRef<TextInput>(null);
  const inputRef2 = useRef<TextInput>(null);

  const handleClick = () => {
    console.log('2689');
    inputRef1.current?.blur();
    inputRef2.current?.blur();
  };
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <TouchableWithoutFeedback style={{flex: 1}} onPress={handleClick}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          locations={[0, 0.2, 0.7, 1]}
          colors={['#7F7FDA', '#8787D2', '#7E83CB', '#A1A1EB']}
          style={styles.con}>
          <View style={styles.header}>
            <Image
              source={{uri: 'http://47.103.211.10:9090/static/images/pika.png'}}
              style={styles.logo}
            />
            <Text style={styles.title}>utalk</Text>
          </View>
          <View style={styles.inputCard}>
            <Input
              ref={inputRef1}
              placeholder={'请输入'}
              prefixIcon={'account-circle'}
              onChangeText={text => setEmail(text)}
            />
            <Input
              ref={inputRef2}
              placeholder={'请输入'}
              prefixIcon={'account-circle'}
              onChangeText={text => setEmail(text)}
              suffixIcon={'visibility'}
            />
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  con: {
    width: '100%',
    height: '100%',
    paddingTop: StatusBarManager.HEIGHT,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    marginTop: 80,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  title: {
    color: '#FFC600',
    fontSize: 40,
    marginLeft: 10,
    marginTop: 10,
    alignSelf: 'center',
  },
  inputCard: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 20,
    minHeight: 360,
    marginVertical: 80,
  },
});

export default App;
