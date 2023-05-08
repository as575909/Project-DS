import { Image, View } from "react-native";
import React from "react";
import { Images } from "../../assets/images";
import { styles } from "./index.style";

const UserAvatar = ({userImg}) => {
  return (
    <View>
      <Image style={styles.imgStyle} source={{ uri: userImg }} />
    </View>
  );
};

export default UserAvatar;