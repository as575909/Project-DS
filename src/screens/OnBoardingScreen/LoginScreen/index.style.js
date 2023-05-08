import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import colors from "../../../statics/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: "center",
        justifyContent: 'center',
        marginTop: moderateScale(20),
    },
    topContainer: {
        color: colors.text1,
        textAlign: 'center',
        alignItems: 'center',
        marginVertical: moderateScale(10),
        fontFamily: "Itim-Regular",
        marginTop: moderateScale(50),
    },
    title: {
        color: 'blue',
        fontSize: responsiveFontSize(4),
        fontFamily: "Itim-Regular",   
    },
    subtitle: {
        color: 'blue',
        fontSize: responsiveFontSize(3.5),
        fontFamily: "Itim-Regular",
    },
    inputout: {
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

    forgot: {
        color: colors.text2,
        marginTop: moderateScale(20),
        marginBottom: moderateScale(10),
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
        fontFamily: "Itim-Regular",
       // marginTop: '-2%',
        alignSelf: 'center',
    },
    error: {
        color: 'red',
        marginLeft: '5%',
    },
});