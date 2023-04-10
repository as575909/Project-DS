import { StyleSheet } from "react-native";
import {moderateScale} from 'react-native-size-matters';
import colors from "../../statics/styles/colors";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    list: {
        alignItems: 'center',
    },
    noData: {
        fontSize: responsiveFontSize(3),
        justifyContent: 'center',
    }

})