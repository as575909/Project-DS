import React from 'react';
import { TextInput, View, Text} from 'react-native';
import {styles} from '../../screens/Contact/index.style';

// Input component
export const Input = ({ label, placeholder, value, onChangeText, multiline, numberOfLines }) => {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>{label}</Text>
        <TextInput
          style={multiline ? [styles.inputStyle, styles.multilineStyle] : styles.inputStyle}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          numberOfLines={numberOfLines}
          multiline={multiline}
        />
      </View>
    );
  };