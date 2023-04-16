import { Image, View } from "react-native";
import React from "react";
import { Images } from "../../assets/images";
import { styles } from "./index.style";

const UserAvatar = () => {
  return (
    <View>
      <Image style={styles.imgStyle} source={Images.me1} />
    </View>
  );
};

export default UserAvatar;