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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
