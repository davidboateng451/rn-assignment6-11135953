import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Our Products' }} 
      />
      <Stack.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{ title: 'Checkout' }} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
