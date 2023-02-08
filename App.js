import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import UserData from './src/screens/UserData';
import Course from './src/screens/Course';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      {/* //HomeScreen */}
    <Stack.Screen name="Home" options={{headerShown: false,}}>
      {(props) => <Home {...props} channelName ={"EduoSkill!!"} />}
      </Stack.Screen>
      {/* CourseScreen */}
    <Stack.Screen name='Course' component={Course}
    options = {{
      headerTitleStyle: {
        fontSize: 25,
      },
      headerTitle: "Courses",
      headerTitleAlign: "center",
    }} />
     {/* AboutScreen */}
    <Stack.Screen name='About' component={About}
    options = {{
      headerTitleStyle: {
        fontSize: 25,
      },
      headerTitleAlign: "center",
    }} />
      {/* ContactScreen */}
    <Stack.Screen name='Contact' component={Contact}
    options = {{
      headerTitleStyle: {
        fontSize: 25,
      },
      headerTitleAlign: "center",
    }} />
     {/* UserDataScreen */}
     <Stack.Screen name='UserData' component={UserData}
     options = {{
      headerTitleStyle: {
        fontSize: 25,
      },
      headerTitleAlign: "center",
    }} />

    </Stack.Navigator>
  </NavigationContainer>
  );
};
export default App;






















































// {/* <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/45/45010.png' }}
//  style={{
//   height: 50, 
//   width: 50,
//    opacity: 0.7, 
//    alignItems: 'center', 
//    borderWidth: 1, 
//    borderColor: '#fff', 
//    borderRadius: 10 
//    }}>

// </Image> */} 