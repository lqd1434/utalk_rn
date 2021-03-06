import {
  GestureResponderEvent,
  StyleSheet,
  TextInput,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Shadow} from 'react-native-neomorph-shadows';

interface InputProps {
  prefixIcon: string;
  placeholder: string;
  isSecure?: boolean;
  suffixIcon?: string;
  onClickSuffixIcon?: (e: GestureResponderEvent) => void;
  onChangeText: (text: string) => void;
}

export const Input = React.forwardRef((props: InputProps, ref: any) => {
  const {
    prefixIcon,
    placeholder = '',
    suffixIcon,
    onClickSuffixIcon,
    onChangeText,
    isSecure = false,
  } = props;

  const [isFocused, setFocused] = useState(false);
  const {width} = useWindowDimensions();

  return (
    <Shadow
      useArt
      style={{
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowColor: isFocused ? '#8289E8' : 'white',
        shadowRadius: 10,
        elevation: 10,
        width: width - 80,
        height: 55,
        ...styles.con,
      }}>
      <Icon name={prefixIcon} size={30} color="#8787D2" style={styles.icon} />
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isSecure}
        selectionColor={'#7F7FDA'}
        onChangeText={onChangeText}
        defaultValue={''}
        ref={ref}
      />
      {suffixIcon && (
        <Icon
          onPress={onClickSuffixIcon}
          name={suffixIcon}
          size={30}
          color="#8787D2"
          style={styles.icon}
        />
      )}
      {/*</View>*/}
    </Shadow>
  );
});

const styles = StyleSheet.create({
  con: {
    backgroundColor: '#EBE7FF',
    borderRadius: 50,
    marginTop: 20,
    paddingVertical: 5,
    paddingLeft: 6,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  focus: {
    elevation: 7,
    shadowColor: '#4242B1',
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 0},
  },
  input: {
    fontSize: 18,
    flex: 1,
    letterSpacing: 1,
  },
  inputFocus: {
    fontSize: 18,
    flex: 1,
    letterSpacing: 1,
    shadowColor: '#8787D2',
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 0},
  },
  icon: {
    marginHorizontal: 5,
  },
});
