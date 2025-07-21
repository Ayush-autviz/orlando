/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, useColorScheme } from 'react-native';
import CustomTabNavigator from './src/navigation/CustomTabNavigator';
import AttractionDetailScreen from './src/screens/AttractionDetailScreen';
import WebViewScreen from './src/screens/WebViewScreen';
import DiningCategoryScreen from './src/screens/DiningCategoryScreen';
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen';
import GolfScreen from './src/screens/GolfScreen';
import GolfDetailScreen from './src/screens/GolfDetailScreen';
import ShoppingDetailScreen from './src/screens/ShoppingDetailScreen';

const Stack = createStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={CustomTabNavigator} />
        <Stack.Screen name="AttractionDetail" component={AttractionDetailScreen} />
        <Stack.Screen name="WebView" component={WebViewScreen} />
        <Stack.Screen name="DiningCategory" component={DiningCategoryScreen} />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
        <Stack.Screen name="Golf" component={GolfScreen} />
        <Stack.Screen name="GolfDetail" component={GolfDetailScreen} />
        <Stack.Screen name="ShoppingDetail" component={ShoppingDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
