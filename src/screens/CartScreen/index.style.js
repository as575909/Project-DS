import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import Strings from '../../statics/Strings';


export const styles = StyleSheet.create({
    footer: {
      width: '100%',
      height: 50,
      backgroundColor: '#fff',
      position: 'absolute',
      bottom: moderateScale(-10),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  
    total1: {
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
  
    total2: {
      fontSize: 20,
      fontWeight: '700',
      color: 'black',
      marginRight: 70,
    },
    cardImage: {
      width: "100%",
      height: undefined,
      aspectRatio: 3,
    },
    mainContainer: {
      paddingHorizontal: 30,
    },
    courseContainer: {
      padding: 20,
      backgroundColor: "rgba(255, 255, 255, 0.90)",
      textAlign: "center",
      borderRadius: 5,
      shadowColor: "grey",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 8,
      marginVertical: 5,
    },
    mainHeader: {
      fontSize: 22,
      color: "#344055",
      textTransform: "uppercase",
      // fontWeight: 500,
      paddingBottom: 15,
      textAlign: "center",
      fontFamily: "Kanit-Bold",
    },
  
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    buttonStyle: {
      backgroundColor: "#809fff",
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 10,
    },
    buttonText: {
      fontSize: 20,
      color: "#eee",
      fontFamily: "Itim-Regular",
      textTransform: "capitalize",
    },
    qty: {
      marginLeft: 0,
      fontSize: 16,
      fontWeight: '600',
      marginTop: 10,
    },
    deleteButton: {
      backgroundColor: 'red',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 0,
      
    },
  
  })