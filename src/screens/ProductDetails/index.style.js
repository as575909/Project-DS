import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { responsiveFontSize } from "react-native-responsive-dimensions";
import colors from "../../statics/styles/colors";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const containerWidth = width * 1;
const containerHeight = height * 1;

export const styles = StyleSheet.create({
    mainContainer: {
      width: containerWidth,
      height: containerHeight, 
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
  
    cardImage: {
      width: "100%",
      display: "flex",
      alignSelf: "center",
      height: undefined,
      aspectRatio: moderateScale(1.5),
      borderRadius: moderateScale(5),
    },
  
    mainHeader: {
      fontSize: responsiveFontSize(3),
      color: colors.primary,
      textTransform: "uppercase",
      fontWeight: "500",
      paddingTop: moderateScale(20),
      paddingBottom: moderateScale(10),
      fontFamily: "Itim-Regular",
      textAlign: "center",
    },
  
  
    description: {
      textAlign: "center",
      fontSize: responsiveFontSize(2),
      color: colors.text3,
      paddingBottom: moderateScale(20),
      fontFamily: "Itim-Regular",
      lineHeight: moderateScale(20),
      alignItems: 'center',
    },
    subCourse: {
      textTransform: "uppercase",
      color: colors.primary,
      fontFamily: "Itim-Regular",
      fontSize: responsiveFontSize(2),
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
    }
  });