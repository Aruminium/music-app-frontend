import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Signup from './src/pages/Signup';
import Mypage from "./src/pages/signed/MyPage";
import MyCalendar from "./src/pages/signed/MyCalendar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="MyPage" component={Mypage}/>
        <Stack.Screen name="MyCalendar" component={MyCalendar}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
