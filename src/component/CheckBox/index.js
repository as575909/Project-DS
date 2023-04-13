import React, { useState } from 'react';
import { Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { styles } from './index.style';
import Strings from '../../statics/Strings';

export const Checkbox = ({ value, onValueChange }) => {
    return (
      <View style={styles.wrapper}>
        <CheckBox value={value} onValueChange={onValueChange} color={value ? "#4630EB" : undefined} />
        <Text style={styles.wrapperText}> {Strings.contact_tc} </Text>
      </View>
    );
  };