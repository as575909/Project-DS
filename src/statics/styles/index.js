import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import colors from './colors';

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    display: "flex",
    paddingHorizontal: moderateScale(20),
    backgroundColor: colors.col1,
    textAlign: "center",
  },

  header: {
    display: 'flex',
    width: '100%',
  },

  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: moderateScale(10),
  },

  headerImage: {
    width: responsiveWidth(80),
    height: responsiveHeight(30),
    marginTop: responsiveHeight(5),
    marginBottom: responsiveHeight(5),
    borderRadius: responsiveWidth(4),
  },

  mainHeader: {
    fontSize: responsiveFontSize(4),
    color: colors.primary,
    textTransform: "uppercase",
    fontFamily: "Itim-Regular",
  },

  mainHeader1: {
    fontSize: responsiveFontSize(6),
    color: colors.secondary,
    marginTop: moderateScale(0),
    fontWeight: 'bold',
  },

  paraStyle: {
    textAlign: "center",
    fontSize: responsiveFontSize(2.2),
    color: colors.para,
    marginTop: moderateScale(10),
    paddingBottom: moderateScale(30),
    lineHeight: moderateScale(26),
    fontFamily: "Itim-Regular",
  },
  lineStyle: {
    marginBottom: moderateScale(10),
    borderWidth: moderateScale(0.5),
    borderColor: colors.line,
  },

  //customDrawer
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
    borderTopColor: colors.footer
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
  
  //welcomeScreen
  welcome: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Itim-Regular",
},
title: {
    fontSize: responsiveFontSize(6),
    color: colors.text1,
    textAlign: 'center',
    marginVertical: moderateScale(10),
    fontFamily: "Itim-Regular",
},
logoout: {
    width: '80%',
    height: '30%',
    alignItems: 'center',
},
logo: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
},
text: {
    fontSize: responsiveFontSize(2.5),
    width: '80%',
    color: colors.text2,
    textAlign: 'center',
    fontFamily: "Itim-Regular",
},
btnout: {
    flexDirection: 'row',
},
btn: {
    fontSize: responsiveFontSize(2.4),
    color: colors.text1,
    textAlign: 'center',
    marginVertical: moderateScale(30),
    marginHorizontal: moderateScale(10),
    backgroundColor: colors.col1,
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    fontFamily: "Itim-Regular",
},
});


export default styles;