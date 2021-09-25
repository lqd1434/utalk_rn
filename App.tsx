/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

const App = () => {
  const backgroundStyle = {
    backgroundColor: 'white',
  };
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Image
          source={{uri: 'http://47.103.211.10:9090/static/images/girl.jpg'}}
          style={{width: '100%', height: 200}}
        />
        <View
          style={{
            backgroundColor: 'white',
          }}>
          <TextInput
            style={{
              height: 40,
              borderStyle: 'solid',
              borderWidth: 1,
              borderColor: 'blue',
              margin: 10,
              borderRadius: 10,
              paddingLeft: 10,
            }}
            placeholder="请输入"
            onChangeText={text => setText(text)}
            defaultValue={text}
          />
          <Text style={{backgroundColor: 'transparent'}}>{text}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
