/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, useColorScheme, View } from 'react-native';
import CustomTabNavigator from './src/navigation/CustomTabNavigator';
import AttractionDetailScreen from './src/screens/AttractionDetailScreen';
import WebViewScreen from './src/screens/WebViewScreen';
import DiningCategoryScreen from './src/screens/DiningCategoryScreen';
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen';
import GolfScreen from './src/screens/GolfScreen';
import GolfDetailScreen from './src/screens/GolfDetailScreen';
import ShoppingDetailScreen from './src/screens/ShoppingDetailScreen';
import EpicUniverseGuideScreen from './src/screens/EpicUniverseGuideScreen';
import SplashScreen from './src/components/SplashScreen';

const Stack = createStackNavigator();

function App() {
  const [isReady, setIsReady] = useState(false);
  const [initialRoute, setInitialRoute] = useState('Splash');
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return null; // Show nothing while initializing
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={initialRoute}
      >
        <Stack.Screen name="Splash"   component={SplashScreen} />
        <Stack.Screen name="Main"  options={{ animation: 'fade' }} component={CustomTabNavigator}  />
        <Stack.Screen name="AttractionDetail" component={AttractionDetailScreen} />
        <Stack.Screen name="WebView" component={WebViewScreen} />
        <Stack.Screen name="DiningCategory" component={DiningCategoryScreen} />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
        <Stack.Screen name="Golf" component={GolfScreen} />
        <Stack.Screen name="GolfDetail" component={GolfDetailScreen} />
        <Stack.Screen name="ShoppingDetail" component={ShoppingDetailScreen} />
        <Stack.Screen name="EpicUniverseGuide" component={EpicUniverseGuideScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
