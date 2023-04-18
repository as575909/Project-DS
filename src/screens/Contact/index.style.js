import { StyleSheet } from "react-native";
import colors from '../../statics/styles/colors'
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const containerWidth = width * 1;
const containerHeight = height * 1.1;


export const styles = StyleSheet.create({
    mainContainer: {
      width: containerWidth,
      height: containerHeight, 
      flex: 1,
      height: "100%",
      paddingHorizontal: 30,
      backgroundColor: "#fff",
    },
    mainHeader: {
      fontSize: 24,
      color: "#344055",
      fontWeight: "500",
      paddingTop: 20,
      paddingBottom: 5,
      fontFamily: "Itim-Regular",
      textTransform: "capitalize",
    },
    description: {
      fontSize: 18,
      color: "#7d7d7d",
      paddingBottom: 20,
      fontFamily: "Itim-Regular",
      lineHeight: 25,
    },
  
    inputContainer: {
      marginTop: 2,
    },
    labels: {
      // fontWeight: "bold",
      fontSize: 15,
      color: "#7d7d7d",
      paddingBottom: 5,
      fontFamily: "Itim-Regular",
      lineHeight: 25,
    },
    inputStyle: {
     color: colors.text1,
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.3)",
      paddingHorizontal: 15,
      paddingVertical: 6,
      borderRadius: 2,
    },
    multilineStyle: {
      paddingVertical: 4,
    },
    
  });