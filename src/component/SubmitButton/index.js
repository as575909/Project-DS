import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import { styles } from './index.style';

export const SubmitButton = ({ agree, text, onPress }) => {
    return (
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? "#4630EB" : "grey",
          },
        ]}
        disabled={!agree}
        onPress={onPress}>
        <Text style={styles.buttonText}> {text} </Text>
      </TouchableOpacity>
    );
  };