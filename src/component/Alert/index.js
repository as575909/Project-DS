import {Alert, BackHandler, Text} from 'react-native';
import Strings from '../../statics/Strings';


// export const showAlert = (title, message, pressed) => {
//   Alert.alert(
//     title,
//     message,
//     [ { text: 'Cancel', onPress: ()=>{ console.log('Cancel Pressed');}, style: 'cancel',},
//       { text: 'OK', onPress: () => pressed()},
//     ],
//     { cancelable: false }
//   );
// };

// export default showAlert;



export function handleBackPress() {
  Alert.alert(
    'Exit App',
    'Do you want to exit the App?',
    [
      {
        text: 'Cancel',
        onPress: ()=>{
          console.log('Cancel Pressed');
        },
        style: 'cancel',
},
{
  text: 'OK',
  onPress: ()=> BackHandler.exitApp(), 
},
    ],
    {
      cancelable: false,
    },
  )
  return true;
}
