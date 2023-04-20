import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../component/CustomButton'
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../statics/styles/colors';


const Settings = () => {
  return (
    <View>
      <View style={styles.lngicon}>
      <Ionicons style={styles.icon} name='language-outline' size={28} color= 'black' />
      <CustomButton style={styles.cstmBtn} text={'Choose Language'} stylee={styles.cstmBtnTxt} />
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    lngicon: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
    },
    icon: {
        marginTop: 11,
    },
    cstmBtn:{
        backgroundColor: 'white', 
        elevation: 5,
      
    },
    cstmBtnTxt:{
        color: colors.text3,  alignSelf: 'flex-start', marginLeft: 5
    }
})