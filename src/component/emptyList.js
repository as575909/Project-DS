import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import colors from "../statics/styles/colors";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export const listEmptyComponent = () => {
    return (
        <View style={styles.list}>
           <Text style={styles.noData}>No Preview data available</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        alignItems: 'center',
    },
    noData: {
        fontSize: responsiveFontSize(3),
        justifyContent: 'center',
    }

})