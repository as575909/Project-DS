import { StyleSheet } from "react-native";
import colors from "../../statics/styles/colors";
import { moderateScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
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