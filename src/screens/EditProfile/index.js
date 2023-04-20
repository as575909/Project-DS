import React, {useState} from 'react'
import {
  Alert,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { styles } from './index.style';
import InputWithIcon from '../../component/InputWithIcon';
import CustomButton from '../../component/CustomButton';
import Strings from '../../statics/Strings';
import MyText from '../../component/MyText';
import { webImgs } from "../../assets/images";
import ImagePicker from 'react-native-image-crop-picker';
import UserAvatar from '../../component/UserAvatar';
import MyButton from '../../component/MyButton';

const EditProfile = () => {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState("");
    const [PhoneNum, setPhoneNum] = useState("");
    const [Address, setAddress] = useState('');
    const [image, setImage] = useState(webImgs.avatarMale);

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
          compressImageMaxWidth: 300,
          compressImageMaxHeight: 400,
          cropping: true,
        }).then(image => {
          console.log(image);
          setImage(image.path);
        });
      }
      
      const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true
        }).then(image => {
          console.log(image);
          setImage(image.path);
        });
      }

    const handleSubmit = () => {
        // dispatch(
        //   updateUserDetails({
        //     firstName: FirstName,
        //     lastName: LastName,
        //     email: Email,
        //     contactNumber: PhoneNum,
        //     city: Address,
        //   }),
        // );
        Alert.alert('Profile Updated Successfully!!');
        console.log(FirstName, LastName, Email, PhoneNum, Address);
      };


  return (
    <View style={styles.container2}>
        
            <ScrollView>
                <View style={styles.topContainer}>
                    {/* <MyText style={styles.subtitle}>Edit Profile</MyText> */}
                    <UserAvatar userImg= {image} />
                    <View style={styles.btnCtn}>
      <MyButton onPress={takePhotoFromCamera} text="Take Photo" />
      <MyButton style={{marginLeft: 10}} onPress={choosePhotoFromLibrary} text= "Choose from Gallery" />
      </View>
                </View>
                <View style={styles.inputout}>
                    <InputWithIcon iconName="user" placeholder="FirstName" value={FirstName} onChangeText={setFirstName} />
                    <InputWithIcon iconName="user" placeholder="LastName" value={LastName} onChangeText={setLastName} />
                    <InputWithIcon iconName={Strings.sigunup_email_iconname} placeholder={Strings.sigunup_email_placeholder} value={Email} onChangeText={setEmail} />
                    <InputWithIcon iconName={Strings.sigunup_mob_iconname} placeholder={Strings.sigunup_mob_placeholder} value={PhoneNum} onChangeText={setPhoneNum} />
                    <InputWithIcon iconName="address-card" placeholder="Address" value={Address} onChangeText={setAddress} />
                </View>
                <CustomButton onPress={handleSubmit} text="Save" />
            </ScrollView>
        </View>
  )
}

export default EditProfile

