import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import colors from "../../statics/styles/colors";


export const styles = StyleSheet.create({
    cardImage: {
      width: "100%",
      height: undefined,
      aspectRatio: moderateScale(1),
      borderRadius: moderateScale(50),
    },
    mainContainer: {
      paddingHorizontal: moderateScale(20),
    },
    courseContainer: {
      padding: moderateScale(30),
      backgroundColor: colors.cardBgColor,
      textAlign: "center",
      borderRadius: moderateScale(5),
      shadowColor: colors.text2,
      shadowOffset: { width: moderateScale(0), height: moderateScale(0) },
      shadowOpacity: moderateScale(0.5),
      shadowRadius: moderateScale(8),
      elevation: moderateScale(8),
      marginVertical: moderateScale(30),
    },
    mainHeader: {
      fontSize: 20,
      color: "#344055",
      textTransform: "uppercase",
      paddingTop: moderateScale(10),
      // fontWeight: 500,
      paddingBottom: moderateScale(15),
      textAlign: "center",
      fontFamily: "Kanit-Bold",
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
     
    },
    buttonStyle: {
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
    zero: {
      marginTop: moderateScale(10),
      fontSize: moderateScale(16), 
      fontWeight: '600',
      marginLeft: moderateScale(10),
      marginRight: moderateScale(20),
    },
    price: {
        textTransform: "uppercase",
        color: "#344055",
        fontFamily: "Itim-Regular",
        textAlign: "center",
        fontSize: moderateScale(20),
        paddingBottom: moderateScale(15),
        alignItems: "center",
    },
  });