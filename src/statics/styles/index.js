import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

  const styles = StyleSheet.create({
    mainContainer: {
      height: '100%',
      display: "flex",
      paddingHorizontal: moderateScale(20),
      backgroundColor: "#fff",
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
      // height: '40%',
      // width: "100%",
      width: responsiveWidth(80),
      height: responsiveHeight(30),
      // aspectRatio: 1.5,
      // display: "flex",
      // alignItems: "stretch",
      marginTop: responsiveHeight(5),
      marginBottom: responsiveHeight(5),
      borderRadius: responsiveWidth(4),
    },
  
    mainHeader: {
      // fontSize: 30,
      fontSize: responsiveFontSize(4),
      color: "#344055",
      textTransform: "uppercase",
      fontFamily: "Itim-Regular",
    },
  
    mainHeader1: {
        fontSize:responsiveFontSize(6),
        color: "#4c5dab",
        marginTop: moderateScale(0),
        fontWeight: 'bold',
    },
  
    paraStyle: {
      textAlign: "center",
      fontSize: responsiveFontSize(2.2),
      color: "#7d7d7d",
      marginTop: moderateScale(10),
      paddingBottom: moderateScale(30),
      lineHeight: moderateScale(26),
      fontFamily: "Itim-Regular",
    },
    lineStyle: {
      marginBottom: moderateScale(10),
      borderWidth: moderateScale(0.5),
      borderColor: "#4c5dab",
    },
  });

  
export default styles;