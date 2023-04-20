import { StyleSheet } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { moderateScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    btn1: {
        width: '80%',
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 10,
        alignItems: 'center',
        elevation: 10,
        color: 'white',
        alignSelf: 'center'
    },
    signupTxt: {
        color: 'white',
        fontSize: responsiveFontSize(3),
        fontFamily: "Itim-Regular",
        marginTop: moderateScale(10),
       
    },
})