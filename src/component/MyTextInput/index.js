import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './index.style';

const MyTextInput = (props) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
      placeholderTextColor='#9e9e9e'
      underlineColorAndroid='transparent'
    />
  );
};

export default MyTextInput;


