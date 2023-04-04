import React from 'react';
import { TextInput, StyleSheet} from 'react-native';


const MyTextInput = (props) => {
  const { placeholder, onChangeText, value, onEndEditing, onBlur, keyboardType, secureTextEntry } = props;

  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      onEndEditing={onEndEditing}
      onBlur={onBlur}
      value={value}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default MyTextInput;

