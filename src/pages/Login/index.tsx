import LinearGradient from 'react-native-linear-gradient';
import {
  Image,
  NativeModules,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Input} from '../../components/Input';
import React, {useRef, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
const {StatusBarManager} = NativeModules;

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [email, setEmail] = useState('');
  const [isShowPwd, setShowPwd] = useState(false);

  const inputRef1 = useRef<TextInput>(null);
  const inputRef2 = useRef<TextInput>(null);
  const handleClick = () => {
    inputRef1.current?.blur();
    inputRef2.current?.blur();
  };
  console.log(11);

  return (
    // <SafeAreaView>
    <TouchableWithoutFeedback style={{flex: 1}} onPress={handleClick}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        locations={[0, 0.2, 0.7, 1]}
        colors={['#7F7FDA', '#8787D2', '#7E83CB', '#A1A1EB']}
        style={styles.con}>
        <View style={styles.header}>
          <Image
            source={{
              uri: 'http://47.103.211.10:9090/static/images/pika.png',
            }}
            style={styles.logo}
          />
          <Text style={styles.title}>utalk</Text>
        </View>
        <View style={styles.inputCard}>
          <Input
            ref={inputRef1}
            placeholder={'请输入手机号或邮箱'}
            prefixIcon={'account-circle'}
            onChangeText={text => setEmail(text)}
          />
          <Input
            ref={inputRef2}
            isSecure={isShowPwd}
            placeholder={'请输入密码'}
            prefixIcon={'lock'}
            onChangeText={text => setEmail(text)}
            onClickSuffixIcon={() => setShowPwd(!isShowPwd)}
            suffixIcon={isShowPwd ? 'visibility-off' : 'visibility'}
          />
          <TouchableOpacity
            onPress={() => {
              console.log('55');
            }}>
            <Text style={styles.forget}>忘记密码?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Index');
            }}>
            <View style={{borderRadius: 100}}>
              <Text style={styles.btn}>登录</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log('55');
            }}>
            <Text style={styles.register}>没有账号?去注册</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
    // </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  con: {
    width: '100%',
    height: '100%',
    paddingTop: StatusBarManager.HEIGHT,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    marginTop: 60,
  },
  logo: {
    width: 120,
    height: 120,
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
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  forget: {
    color: '#7F7FDA',
    fontSize: 18,
    alignSelf: 'center',
    marginVertical: 20,
  },
  btn: {
    backgroundColor: '#7F7FDA',
    paddingVertical: 13,
    textAlign: 'center',
    alignSelf: 'center',
    width: '100%',
    fontSize: 25,
    color: 'white',
    borderRadius: 100,
  },
  register: {
    color: '#7F7FDA',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 20,
  },
});
