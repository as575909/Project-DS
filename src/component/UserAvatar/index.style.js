import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  imgStyle: {
    width: moderateScale(140),
    height: moderateScale(140),
    borderRadius: moderateScale(100),
  },
});