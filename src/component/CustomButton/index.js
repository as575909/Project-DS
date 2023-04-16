import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './index.style';

const CustomButton = ({ chEmail, onPress, text }) => {
  return (
    <TouchableOpacity
      disabled={chEmail === 'true'}
      style={[
       styles.btn1,
        { backgroundColor: chEmail === 'true' ? 'gray' : 'blue' },
      ]}
      onPress={onPress}
    >
      <Text style={styles.signupTxt}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
