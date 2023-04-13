import React, {useState, useEffect} from 'react';
import {View, Text } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { styles } from './index.style';

const LocationComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Location:</Text>
      {latitude && longitude ? (
        <Text style={styles.location}>
          Latitude: {latitude.toFixed(4)}, Longitude: {longitude.toFixed(4)}
        </Text>
      ) : (
        <Text style={styles.loading}>Loading...</Text>
      )}
    </View>
  );
};


export default LocationComponent;