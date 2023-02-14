import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import UserData from './UserData';
import Course from './Course';
import CourseDetails from './CourseDetails';

const Navigation = () => {
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
        fontFamily: "Itim-Regular",
      },
      headerTitleAlign: "center",
    }} />
      {/* ContactScreen */}
    <Stack.Screen name='Contact' component={Contact}
    options = {{
      headerTitleStyle: {
        fontSize: 25,
        fontFamily: "Itim-Regular",
      },
      headerTitleAlign: "center",
    }} />
     {/* UserDataScreen */}
     <Stack.Screen name='UserData' component={UserData}
     options = {{
      headerTitleStyle: {
        fontSize: 25,
        fontFamily: "Itim-Regular",
      },
      headerTitleAlign: "center",
    }} />

     {/* CourseDetails Screen  */}
     <Stack.Screen
          name="CourseDetails" component={CourseDetails}
          options = {{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Itim-Regular",
            },
            headerTitleAlign: "center",
          }} />

    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default Navigation;