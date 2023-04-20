import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import colors from "../../statics/styles/colors";

export const styles = StyleSheet.create({
    container2: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: "center",
        justifyContent: 'center',

    },
    topContainer: {
        marginTop: moderateScale(10),
        alignItems: 'center',
        textAlign: 'center',
    },
    title: {
        color: 'blue',
        fontSize: moderateScale(30),
        fontFamily: "Itim-Regular",
    },
    subtitle: {
        color: 'blue',
        fontSize: responsiveFontSize(3.5),
        fontFamily: "Itim-Regular",
    },

    inputout: {
        // flexDirection: 'row',
        flex: 1,
        width: '90%',
        marginVertical: moderateScale(10),
        backgroundColor: colors.col1,
        borderRadius: moderateScale(10),
        paddingHorizontal: moderateScale(5),
        paddingVertical: moderateScale(0),
        alignSelf: 'center',
        elevation: moderateScale(20),
    },
    input: {
        fontSize: responsiveFontSize(2),
        marginLeft: moderateScale(10),
        width: '75%',
        fontFamily: "Itim-Regular",
    },
    icon: {
        padding: moderateScale(10),
    },
    icon1: {
        padding: moderateScale(1),
        marginTop: moderateScale(10),
    },
    forgot: {
        color: colors.text2,
        marginTop: moderateScale(20),
        marginBottom: moderateScale(10),
        fontFamily: "Itim-Regular",
    },
    or: {
        color: colors.text1,
        marginVertical: moderateScale(8),
        fontWeight: 'bold',
        fontFamily: "Itim-Regular",
        alignSelf: 'center',
    },

    signup: {
        color: colors.text1,
        fontFamily: "Itim-Regular",
        alignSelf: 'center',
    },
    dont: {
        color: colors.text2,
        marginTop: '-2%',
        alignSelf: 'center',
    },
    error: {
        color: 'red',
        marginLeft: '5%',
    },
    signupTxt: {
        color: 'white',
        fontSize: responsiveFontSize(3),
        fontFamily: "Itim-Regular",
        marginTop: moderateScale(10),
    },
    btnCtn:{
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
      },

});