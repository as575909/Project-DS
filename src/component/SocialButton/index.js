import { Image, Linking, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./index.style";

const SocialButton = ({ url, icon }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image style={styles.iconStyle} source={{ uri: icon }} />
    </TouchableOpacity>
  );
};

export default SocialButton;
