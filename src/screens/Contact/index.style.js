import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    mainContainer: {
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