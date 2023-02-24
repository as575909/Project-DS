import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import UserData from './UserData';
import Course from './Course';
import CourseDetails from './CourseDetails';
import WelcomeScreen from './LoginSignupScreen/WelcomeScreen';
import LoginScreen from './LoginSignupScreen/LoginScreen';
import SignupScreen from './LoginSignupScreen/SignupScreen';
import CartScreen from './CartScreen';
import DrawerNav from '../component/DrawerNav';
import TabNavigator from '../component/BottomTab';

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