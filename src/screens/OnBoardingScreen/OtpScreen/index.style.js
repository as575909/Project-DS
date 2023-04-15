import { StyleSheet } from 'react-native'
import colors from '../../../statics/styles/colors';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 30,
    },
    title: {
      color: colors.text3,
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitle: {
      color: colors.text3,
      fontSize: 18,
      marginBottom: 30,
      textAlign: 'center',
    },
    input: {
      color: colors.text3,
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#0080FF',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    successContainer: {
      marginTop: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    successText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    resetButton: {
      backgroundColor: '#0080FF',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 5,
    },
  });