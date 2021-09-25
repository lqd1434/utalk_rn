import {GestureResponderEvent, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface InputProps {
  prefixIcon: string;
  placeholder: string;
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
  } = props;

  const [isFocused, setFocused] = useState(false);

  console.log(ref?.current?.isFocused());

  return (
    <View style={isFocused ? {...styles.focus, ...styles.con} : styles.con}>
      <Icon name={prefixIcon} size={30} color="#8787D2" style={styles.icon} />
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={styles.input}
        placeholder={'请输入'}
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
    </View>
  );
});

const styles = StyleSheet.create({
  con: {
    backgroundColor: '#EBE7FF',
    borderRadius: 50,
    marginTop: 20,
    marginHorizontal: 20,
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
