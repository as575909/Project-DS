import { StyleSheet } from 'react-native';
import colors from '../../statics/styles/colors';
import { moderateScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    button: {
       backgroundColor: colors.btnBgColor,
      borderRadius: moderateScale(5),
      paddingVertical: moderateScale(10),
      paddingHorizontal: moderateScale(10),
      justifyContent: "center",
      alignItems: "center",
      marginRight: moderateScale(15),
    },
    buttonText: {
       fontSize: moderateScale(18),
      color: colors.col1,
      fontFamily: "Itim-Regular",
      textTransform: "capitalize",
    },
  });