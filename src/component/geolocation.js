import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "#fff3b0",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: "Itim-Regular",
  },
  location: {
    fontSize: 18,
    textAlign: 'center',
  },
  loading: {
    fontSize: 18,
    fontStyle: 'italic',
  },
});

export default LocationComponent;