import { StyleSheet } from "react-native";
import {moderateScale} from 'react-native-size-matters';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import colors from '../../statics/styles/colors';

export const styles = StyleSheet.create({
    containerCustomDrawer: {
        flex: 1,
      },
      imgbg: {
        padding: moderateScale(10),
      },
      avatar: {
        height: responsiveWidth(20),
        width: responsiveWidth(20),
        borderRadius: moderateScale(40),
        marginBottom: moderateScale(10),
    
      },
      user: {
        color: colors.col1,
        fontSize: responsiveFontSize(2),
        fontFamily: 'Itim-Regular',
        marginTop: moderateScale(5),
      },
      coins: {
        color: colors.col1,
        fontFamily: 'Itim-Regular',
        marginRight: moderateScale(5),
      },
      coinContainer: {
        flexDirection: 'row',
      },
      list: {
        flex: 1,
        backgroundColor: colors.col1,
        paddingTop: moderateScale(10),
      },
      footer: {
        padding: moderateScale(20),
        borderTopWidth: moderateScale(1),
        borderTopColor: colors.footer,
        //color: colors.footer,
        backgroundColor: colors.drvoilet,
      },
      share: {
        paddingVertical: moderateScale(15),
      },
      shareIcon: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      refer: {
        fontSize: responsiveFontSize(2),
        fontFamily: 'Itim-Regular',
        marginLeft: moderateScale(10),
      },
      headNav: {
        flexDirection: 'row',
        width: '98%',
        marginTop: moderateScale(10),
        marginLeft: '1%',
        padding: moderateScale(5),
        paddingLeft: moderateScale(10),
        alignItems: 'center',
        backgroundColor: colors.col1,
        elevation: 20,
        borderRadius: moderateScale(30),
    
      },
      mytext: {
        color: colors.text1,
        fontSize: 20,
        fontFamily: "Itim-Regular",
        width: '50%',
        paddingLeft: moderateScale(10),
      },
});