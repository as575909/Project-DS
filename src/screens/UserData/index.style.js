import { StyleSheet } from "react-native";
import colors from '../../statics/styles/colors';


export const styles = StyleSheet.create({
    container: {
      backgroundColor: 'grey',
      marginHorizontal: 2,
      marginBottom: 15,
      borderRadius: 10,
      shadowColor: colors.text2,
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    image: {
      width: '100%',
      height: 250,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    detailsContainer: {
      padding: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
  
    rating: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
  
    rar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
  
      par: {
        color: colors.text1,
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
      },
    },
    description: {
      fontSize: 16,
      color: colors.text1,
      marginBottom: 10,
      textAlign: 'justify',
    },
    button: {
      backgroundColor: '#335c67',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      textTransform: 'uppercase',
      color: colors.col1,
      fontSize: 16,
    },
  });