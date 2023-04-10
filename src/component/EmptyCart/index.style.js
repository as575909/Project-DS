import { StyleSheet } from "react-native";
import { moderateScale } from 'react-native-size-matters';
import colors from '../../statics/styles/colors';
import { responsiveScreenFontSize, responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';



export const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        paddingTop: moderateScale(100),
        fontSize: responsiveScreenFontSize(3),
        justifyContent: 'center',
    },
    text: {
        fontSize: responsiveFontSize(2.5),
        fontFamily: 'Itim-Regular',
    },
    empty: {
        width: responsiveWidth(50),
        height: responsiveHeight(30),
        marginTop: responsiveHeight(2),
        marginBottom: responsiveHeight(3),
        borderRadius: responsiveWidth(4),
    },
 

})