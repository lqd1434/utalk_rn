import LinearGradient from 'react-native-linear-gradient';
import {
  Image,
  NativeModules,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import {Input} from '../../components/Input';
import React, {useRef, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {Spinner} from 'native-base';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
const {StatusBarManager} = NativeModules;

enum Status {
  idle,
  loading,
  success,
  error,
}

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<any, 'Login'>>();
  const {width} = useWindowDimensions();

  const aniValue = useSharedValue(width - 80);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: aniValue.value,
    };
  });

  const [isShowPwd, setShowPwd] = useState(false);
  const [status, setStatus] = useState(Status.idle);
  const inputRef1 = useRef<TextInput>(null);
  const inputRef2 = useRef<TextInput>(null);
  const handleClick = () => {
    inputRef1.current?.blur();
    inputRef2.current?.blur();
  };

  const login = () => {
    if (Status.idle !== status) {
      return;
    }
    setStatus(Status.loading);
    aniValue.value = withTiming(60, {duration: 500});
    setTimeout(() => {
      setStatus(Status.success);
      aniValue.value = withTiming(width - 80, {duration: 500});
      setTimeout(() => {
        navigation.navigate('Home');
      }, 2000);
    }, 3000);
  };

  const renderBtn = () => {
    switch (status) {
      case Status.idle:
        return (
          <Animated.View style={[styles.idle, styles.btn, animatedStyles]}>
            <Text style={styles.text}>登录</Text>
          </Animated.View>
        );
      case Status.loading:
        return (
          <Animated.View style={[styles.loading, styles.btn, animatedStyles]}>
            <Spinner size={30} color={'white'} />
          </Animated.View>
        );
      case Status.success:
        return (
          <Animated.View style={[styles.success, styles.btn, animatedStyles]}>
            <Text style={styles.text}>登录成功</Text>
          </Animated.View>
        );
      case Status.error:
        return 100;
    }
  };

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
            onChangeText={text => {
              console.log(text);
            }}
          />
          <Input
            ref={inputRef2}
            isSecure={isShowPwd}
            placeholder={'请输入密码'}
            prefixIcon={'lock'}
            onChangeText={text => {
              console.log(text);
            }}
            onClickSuffixIcon={() => setShowPwd(!isShowPwd)}
            suffixIcon={isShowPwd ? 'visibility-off' : 'visibility'}
          />
          <TouchableOpacity
            onPress={() => {
              console.log('55');
            }}>
            <Text style={styles.forget}>忘记密码?</Text>
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={login}>
            {renderBtn()}
          </TouchableWithoutFeedback>
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
    paddingVertical: 13,
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    height: 60,
  },
  text: {fontSize: 25, color: 'white', textAlign: 'center'},
  loading: {
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD3F0',
  },
  idle: {
    backgroundColor: '#7F7FDA',
  },
  success: {
    backgroundColor: '#5660E0',
  },
  register: {
    color: '#7F7FDA',
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 20,
  },
});
