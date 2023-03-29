import React from 'react';
import { TextInput, StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { colors } from '../globals/style';

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

