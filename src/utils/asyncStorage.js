import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData =  async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.log(error);
    }
  }

export const getData = async (key, value) => {
    try {
      var value = await AsyncStorage.getItem(key, value);
      if (value !== null) {
        return JSON.parse(value);
    } else {
        return false;
    }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

export const clearAll = async() => {
  const asyncStorageKeys = await AsyncStorage.getAllKeys();
  if (asyncStorageKeys.length > 0) {
    await AsyncStorage.clear();
  }
}