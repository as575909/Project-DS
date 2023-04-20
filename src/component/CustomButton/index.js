import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './index.style';

const CustomButton = ({ chEmail, onPress, text, style, stylee }) => {
  return (
    <TouchableOpacity
      disabled={chEmail === 'true'}
      style={[
       styles.btn1,
        { backgroundColor: chEmail === 'true' ? 'gray' : 'blue' },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.signupTxt, stylee]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
