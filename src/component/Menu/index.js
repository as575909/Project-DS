import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';


const Menu = () => {
    const navigation = useNavigation();

  return (
    <View style = {styles.menuContainer}>
      <TouchableOpacity style = {styles.buttonStyle}
      onPress = {() => navigation.navigate("Course")}> 
        {/* <Text> Course </Text> */}
              <Image source={{ uri: 'https://img.icons8.com/external-yogi-aprelliyanto-glyph-yogi-aprelliyanto/512/external-online-courses-online-courses-yogi-aprelliyanto-glyph-yogi-aprelliyanto.png' }}
                  style={{
                      height: 40,
                      width: 40,
                      opacity: 0.7,
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10
                  }}>
              </Image>
        
      </TouchableOpacity>

      <TouchableOpacity style = {styles.buttonStyle}
      onPress = {() => navigation.navigate("UserData")}> 
        {/* <Text> UserData </Text> */}
        <Image source={{ uri: 'https://img.icons8.com/ios-glyphs/512/schoolboy-at-a-desk.png' }}
                  style={{
                      height: 40,
                      width: 40,
                      opacity: 0.7,
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10
                  }}>
        </Image>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.buttonStyle}
      onPress = {() => navigation.navigate("About")}> 
        {/* <Text> About </Text> */}
        <Image source={{ uri: 'https://img.icons8.com/fluency-systems-filled/512/info-popup.png' }}
                  style={{
                      height: 40,
                      width: 40,
                      opacity: 0.7,
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10
                  }}>
        </Image>
      </TouchableOpacity>
      
      <TouchableOpacity style = {styles.buttonStyle}
      onPress = {() => navigation.navigate("Contact")}> 
        {/* <Text> Contact </Text> */}
        <Image source={{ uri: 'https://img.icons8.com/fluency-systems-filled/512/contact-card.png' }}
                  style={{
                      height: 40,
                      width: 40,
                      opacity: 0.7,
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10
                  }}>
        </Image>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
});

export default Menu;
