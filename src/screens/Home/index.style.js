import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import colors from '../../statics/styles/colors';

export const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        display: "flex",
        paddingHorizontal: moderateScale(20),
        backgroundColor: colors.col1,
        textAlign: "center",
      },
    
      header: {
        display: 'flex',
        width: '100%',
      },
    
      homeTop: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: moderateScale(10),
      },
    
      headerImage: {
        width: responsiveWidth(80),
        height: responsiveHeight(30),
        marginTop: responsiveHeight(5),
        marginBottom: responsiveHeight(5),
        borderRadius: responsiveWidth(4),
      },
    
      mainHeader: {
        fontSize: responsiveFontSize(4),
        color: colors.primary,
        textTransform: "uppercase",
        fontFamily: "Itim-Regular",
      },
    
      mainHeader1: {
        fontSize: responsiveFontSize(6),
        color: colors.secondary,
        marginTop: moderateScale(0),
        fontWeight: 'bold',
      },
    
      paraStyle: {
        textAlign: "center",
        fontSize: responsiveFontSize(2.2),
        color: colors.para,
        marginTop: moderateScale(10),
        paddingBottom: moderateScale(30),
        lineHeight: moderateScale(26),
        fontFamily: "Itim-Regular",
      },
      lineStyle: {
        marginBottom: moderateScale(10),
        borderWidth: moderateScale(0.5),
        borderColor: colors.line,
      },
});