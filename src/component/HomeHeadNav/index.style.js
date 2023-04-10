import { StyleSheet } from "react-native";
import { colors } from '../../globals/style';
import { moderateScale } from "react-native-size-matters";


export const styles = StyleSheet.create({
      headNav: {
        flexDirection: 'row',
        width: '98%',
        marginTop: moderateScale(10),
        marginLeft: '1%',
        // justifyContent: 'space-between',
        padding: moderateScale(5),
        paddingLeft: moderateScale(10),
        alignItems: 'center',
        backgroundColor: colors.col1,
        elevation: moderateScale(20),
        borderRadius: moderateScale(30),
    
      },
    
      mytext: {
        color: colors.text1,
        fontSize: moderateScale(20),
        fontFamily: "Itim-Regular",
        width: '50%',
        paddingLeft: moderateScale(10),
    
      },
    });