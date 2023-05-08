import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../../statics/styles/colors';

const MyText = ({ onPress, children, style }) => {
  return <Text 
  onPress={onPress}
  style={[styles.text, style]}>
    {children}
    </Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.text2,
        fontFamily: "Itim-Regular",
       // marginTop: '-2%',
        alignSelf: 'center',
  },
});

export default MyText;
