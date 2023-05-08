import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './index.style';

const MyButton = ({ onPress, text, style }) => {
    return (
      <TouchableOpacity style={[styles.button, style]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  };
  
  export default MyButton;