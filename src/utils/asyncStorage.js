import AsyncStorage from '@react-native-async-storage/async-storage';

export const Storage = {

  async storeData(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.log(error);
    }
  },
  async getData(key) {
    try {
      var value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return JSON.parse(value);
    } else {
        return false;
    }
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};