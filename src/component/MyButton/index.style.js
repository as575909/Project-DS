import { StyleSheet } from 'react-native';
import colors from '../../statics/styles/colors';
import { moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    button: {
      backgroundColor: '#0080FF',
      paddingVertical: moderateScale(15),
      paddingHorizontal: moderateScale(30),
      borderRadius: moderateScale(5),
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: "Itim-Regular",
    },
  });