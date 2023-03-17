import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import UserData from '../screens/UserData';
import Course from '../screens/Course';
import CourseDetails from '../screens/CourseDetails';
import WelcomeScreen from '../screens/OnBoardingScreen/WelcomeScreen';
import LoginScreen from '../screens/OnBoardingScreen/LoginScreen';
import SignupScreen from '../screens/OnBoardingScreen/SignupScreen';
import CartScreen from '../screens/CartScreen';
import DrawerNav from './DrawerNav';
import TabNavigator from './BottomTab';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcomepage'>
        <Stack.Screen name='welcomepage' component={WelcomeScreen}
          options={{ headerShown: false, }}
        />
        <Stack.Screen name='signup' component={SignupScreen}
          options={{ headerShown: false, }}
        />
        <Stack.Screen name='login' component={LoginScreen}
          options={{ headerShown: false, }}
        />

        {/* Cart Screen */}
        <Stack.Screen name='cart' component={CartScreen}
          options={{ headerShown: false, }}
        />

        {/* Drawer Nav  */}
        <Stack.Screen name='DrawerNav' component={DrawerNav}
          options={{ headerShown: false, }}
        />
        {/* //HomeScreen */}
        <Stack.Screen name='Home' component={Home}
          options={{ headerShown: false, }} />
        {/* <Stack.Screen name="Home" options={{ headerShown: false, }}>
          {(props) => <Home {...props} channelName={"EduoSkill!!"} />}
        </Stack.Screen> */}

        <Stack.Screen name="TabNavigator" component={TabNavigator}
          options={{ headerShown: false, }}
        />

        {/* CourseScreen */}
        <Stack.Screen name='Course' component={Course} />
        {/* AboutScreen */}
        <Stack.Screen name='About' component={About} />
        {/* ContactScreen */}
        <Stack.Screen name='Contact' component={Contact} />
        {/* UserDataScreen */}
        <Stack.Screen name='UserData' component={UserData} />

        {/* CourseDetails Screen  */}
        <Stack.Screen
          name="CourseDetails" component={CourseDetails}
          options={{
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