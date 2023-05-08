import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../../component/CustomButton'
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../statics/styles/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTranslation} from 'react-i18next';
import i18n from '../../i18n'


const Settings = () => {
  const {t, i18n} = useTranslation();
 
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items] = useState([
    {label: 'English', value: 'en'},
    {label: 'हिंदी', value: 'hi'},
  ]);

  return (
    <View>
      <View style={styles.lngicon}>
      <Ionicons style={styles.icon} name='language-outline' size={28} color= 'black' />
      {/* <CustomButton style={styles.cstmBtn} text={'Choose Language'} stylee={styles.cstmBtnTxt} /> */}
      <DropDownPicker
            placeholder={t('language')}
            defaultValue="English"
            containerStyle={styles.dropdownContainer}
            style={styles.dropdown}
            itemStyle={styles.dropdownItem}
            dropDownStyle={styles.dropdown}
            labelStyle={styles.dropdownLabel}
            open={open}
            items={items}
            value={value}
            setValue={setValue}
            setOpen={setOpen}
            onChangeValue={(lan) => {
              i18n.changeLanguage(lan);
            }}
          />
      </View>
    </View>
  )
}

export default Settings;

const styles = StyleSheet.create({
    lngicon: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
    },
    icon: {
      marginLeft: 20,
        marginTop: 11,
    },
    cstmBtn:{
        backgroundColor: 'white', 
        elevation: 5,
      
    },
    cstmBtnTxt:{
        color: colors.text3,  alignSelf: 'flex-start', marginLeft: 5
    },
    dropdown: {
      width: '85%',
      backgroundColor: colors.bg,
      borderColor: colors.drvoilet,
      borderWidth: 1,
      marginLeft: 40,
    },
    dropdownItem: {
      justifyContent: 'flex-start',
    },
  
    dropdownLabel: {
      fontSize: 16,
      color: colors.black,
    },
})