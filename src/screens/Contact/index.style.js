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
    multiineStyle: {
      paddingVertical: 4,
    },
    buttonStyle: {
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 18,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 30,
    },
    buttonText: {
      color: "#eee",
    },
    wrapper: {
      display: "flex",
      flexDirection: "row",
      marginTop: 20,
      fontFamily: "Itim-Regular",
    },
    wrapperText: {
      marginLeft: 10,
      color: "#7d7d7d",
      fontFamily: "Itim-Regular",
    },
  });