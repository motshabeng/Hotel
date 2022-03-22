import * as React from 'react';
import 'react-native-gesture-handler';
import HotelRooms from './Screens/hotelRooms';
import Bookings from './Screens/Bookings';
import hotelSearch from './Screens/hotelSearch';
import Locations from './Screens/Locations';
import navigation from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigavigator from '@react-navigation/native';
import LogIn from './Screens/LogIn';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';
import ForgotPassword from './Screens/ForgotPassword';
import Reservations from './Screens/Reservations';
import { collection, getDocs } from 'firebase/firestore';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      
         <Stack.Screen name="LogIn" component={LogIn} />

        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen name="Bookings" component={Bookings} />
      
        <Stack.Screen name="HotelSearch" component={hotelSearch} />
          <Stack.Screen name="HotelRooms" component={HotelRooms} />


           <Stack.Screen name="Reservations" component={Reservations} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

        <Stack.Screen name="Locations" component={Locations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
