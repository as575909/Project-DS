import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { styles } from "./index.style";

export const listEmptyComponent = () => {
    return (
        <View style={styles.list}>
           <Text style={styles.noData}>No Preview data available</Text>
        </View>
    )
}

