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
//import SplashScreen from './src/components/SplashScreen';

const Stack = createStackNavigator();

function App() {
  const [isReady, setIsReady] = useState(false);
  const [initialRoute, setInitialRoute] = useState('Splash');
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOutSplash, setFadeOutSplash] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  console.log('App component mounted - initializing with overlay splash approach');

  // useEffect(() => {
  //   // Simulate app initialization
  //   const timer = setTimeout(() => {
  //     setIsReady(true);
  //   }, 100);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (!isReady) {
  //   return null; // Show nothing while initializing
  // }

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      {/* Main Navigation Stack - always visible */}
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Main"
      >
        <Stack.Screen name="Main" component={CustomTabNavigator} />
        <Stack.Screen name="AttractionDetail" component={AttractionDetailScreen} />
        <Stack.Screen name="WebView" component={WebViewScreen} />
        <Stack.Screen name="DiningCategory" component={DiningCategoryScreen} />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
        <Stack.Screen name="Golf" component={GolfScreen} />
        <Stack.Screen name="GolfDetail" component={GolfDetailScreen} />
        <Stack.Screen name="ShoppingDetail" component={ShoppingDetailScreen} />
        <Stack.Screen name="EpicUniverseGuide" component={EpicUniverseGuideScreen} />
      </Stack.Navigator>

      {/* Splash Screen Overlay - positioned absolutely on top */}
      {showSplash && (
        <SplashScreen
          fadeOut={fadeOutSplash}
          onAnimationComplete={() => {
            console.log('Splash animation completed, starting fade-out...');
            // Start fade out animation after a brief delay
            setTimeout(() => {
              setFadeOutSplash(true);
              // Hide the splash completely after fade-out animation
              setTimeout(() => {
                setShowSplash(false);
                console.log('Splash screen fully hidden, home screen visible');
              }, 800); // Match the fade-out animation duration
            }, 500); // Brief pause before fade-out
          }}
        />
      )}
    </NavigationContainer>
  );
}

import { useRef } from 'react';
import {
 // View,
  Image,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
 // StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BallIndicator } from 'react-native-indicators';
// import { useNavigation } from '@react-navigation/native'; // Not needed for overlay approach

const { width, height } = Dimensions.get('window');

interface SplashScreenProps {
  onAnimationComplete?: () => void;
  fadeOut?: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationComplete, fadeOut = false }) => {
  // const navigation = useNavigation(); // Not needed for overlay approach

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const overlayOpacity = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const indicatorOpacity = useRef(new Animated.Value(0)).current;

  // Background emoji animations
  const star1Opacity = useRef(new Animated.Value(0.1)).current;
  const star2Opacity = useRef(new Animated.Value(0.15)).current;
  const star3Opacity = useRef(new Animated.Value(0.08)).current;
  const castle1Opacity = useRef(new Animated.Value(0.12)).current;
  const castle2Opacity = useRef(new Animated.Value(0.1)).current;
  const castle1Y = useRef(new Animated.Value(0)).current;
  const castle2Y = useRef(new Animated.Value(0)).current;
  const star1Scale = useRef(new Animated.Value(0.8)).current;
  const star2Scale = useRef(new Animated.Value(1.2)).current;
  const star3Scale = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    // Start animations when component mounts
    startAnimation();
  }, []);

  // Handle fade-out animation
  useEffect(() => {
    if (fadeOut) {
      console.log('Starting splash screen fade-out animation');
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start(() => {
        console.log('Splash screen fade-out completed');
      });
    }
  }, [fadeOut]);

  const startAnimation = () => {
    // Reset animations to initial state
    fadeAnim.setValue(0);
    scaleAnim.setValue(0.3);
    rotateAnim.setValue(0);
    logoOpacity.setValue(0);
    indicatorOpacity.setValue(0);

    // Sequence of animations
    Animated.sequence([
      // Initial fade in of background
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      // Logo entrance animation with bounce effect
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1.2,
          tension: 15,
          friction: 4,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      // Indicator fade in with delay
      Animated.timing(indicatorOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();

    // Add a subtle pulsing animation during the display
    const pulseAnimation = () => {
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.25,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Continue pulsing until splash screen ends
        pulseAnimation();
      });
    };

    // Start pulsing after initial animation
    setTimeout(pulseAnimation, 2500);

    // Start background emoji animations
    startBackgroundAnimations();

    // Complete animation after 4 seconds - trigger completion callback
    setTimeout(() => {
      console.log('Splash screen animation sequence completed');
      // Call the callback to trigger fade-out from parent
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 4000);
  };

  const startBackgroundAnimations = () => {
    // Star twinkling animations
    const twinkleStar1 = () => {
      Animated.sequence([
        Animated.timing(star1Opacity, {
          toValue: 0.8,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(star1Opacity, {
          toValue: 0.3,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(star1Scale, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(star1Scale, {
          toValue: 0.8,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => twinkleStar1());
    };

    const twinkleStar2 = () => {
      Animated.sequence([
        Animated.timing(star2Opacity, {
          toValue: 1.0,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(star2Opacity, {
          toValue: 0.5,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(star2Scale, {
          toValue: 1.4,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(star2Scale, {
          toValue: 1.2,
          duration: 1200,
          useNativeDriver: true,
        }),
      ]).start(() => twinkleStar2());
    };

    const twinkleStar3 = () => {
      Animated.sequence([
        Animated.timing(star3Opacity, {
          toValue: 0.7,
          duration: 1800,
          useNativeDriver: true,
        }),
        Animated.timing(star3Opacity, {
          toValue: 0.2,
          duration: 1800,
          useNativeDriver: true,
        }),
        Animated.timing(star3Scale, {
          toValue: 1.0,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(star3Scale, {
          toValue: 0.9,
          duration: 900,
          useNativeDriver: true,
        }),
      ]).start(() => twinkleStar3());
    };

    // Castle floating animations with opacity
    const floatCastle1 = () => {
      Animated.parallel([
        Animated.sequence([
          Animated.timing(castle1Y, {
            toValue: -8,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(castle1Y, {
            toValue: 8,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(castle1Y, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(castle1Opacity, {
            toValue: 0.2,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(castle1Opacity, {
            toValue: 0.08,
            duration: 1500,
            useNativeDriver: true,
          }),
        ]),
      ]).start(() => floatCastle1());
    };

    const floatCastle2 = () => {
      Animated.parallel([
        Animated.sequence([
          Animated.timing(castle2Y, {
            toValue: 12,
            duration: 4000,
            useNativeDriver: true,
          }),
          Animated.timing(castle2Y, {
            toValue: -6,
            duration: 4000,
            useNativeDriver: true,
          }),
          Animated.timing(castle2Y, {
            toValue: 0,
            duration: 4000,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(castle2Opacity, {
            toValue: 0.18,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(castle2Opacity, {
            toValue: 0.06,
            duration: 2000,
            useNativeDriver: true,
          }),
        ]),
      ]).start(() => floatCastle2());
    };

    // Start all background animations
    twinkleStar1();
    twinkleStar2();
    twinkleStar3();
    floatCastle1();
    floatCastle2();
  };

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={[styles.overlayContainer, { opacity: overlayOpacity }]}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

      {/* Elegant gradient background */}
      <View style={styles.gradientBackground} />

      {/* Animated Background Emojis */}
      <View style={styles.emojiBackground}>
        {/* Twinkling Stars */}
        <Animated.Text
          style={[
            styles.starEmoji1,
            {
              opacity: star1Opacity,
              transform: [{ scale: star1Scale }],
            },
          ]}
        >
          ✨
        </Animated.Text>

        <Animated.Text
          style={[
            styles.starEmoji2,
            {
              opacity: star2Opacity,
              transform: [{ scale: star2Scale }],
            },
          ]}
        >
          ✨
        </Animated.Text>

        {/* <Animated.Text
          style={[
            styles.starEmoji3,
            {
              opacity: star3Opacity,
              transform: [{ scale: star3Scale }],
            },
          ]}
        >
          ✨
        </Animated.Text> */}

        {/* Floating Castles */}

        {/* <Animated.Text
          style={[
            styles.castleEmoji2,
            {
              transform: [{ translateY: castle2Y }],
              opacity: castle2Opacity,
            },
          ]}
        >
          🏰
        </Animated.Text> */}
      </View>

      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        {/* Main logo section */}
        <View style={styles.logoSection}>
          <Animated.View
            style={[
              styles.logoContainer,
              {
                transform: [
                  { scale: scaleAnim },
                ],
                opacity: 1,
              },
            ]}
          >
            <Image
              source={require('./assets/icon/logo.png')}
              style={styles.logo}
              resizeMode="contain"
              onLoad={() => console.log('✅ Logo image loaded')}
              onError={(error) => console.log('❌ Logo image failed to load:', error)}
              onLoadStart={() => console.log('✅ Logo image loading started')}
              onLoadEnd={() => console.log('✅ Logo image loading ended')}
            />
          </Animated.View>

          {/* Simple loading indicator */}
        </View>

        {/* App tagline */}
        {/* <Animated.View
          style={[
            styles.taglineContainer,
            {
              opacity: indicatorOpacity,
            },
          ]}
        >
          <Text style={styles.tagline}>Discover the Magic</Text>
        </Animated.View> */}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    flex:1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999, // Ensure it's on top of everything
    backgroundColor: '#1a1a2e',
  },
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    opacity: 0.9,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  logoSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    shadowColor: '#00d4ff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 20,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,

  },
  simpleLoader: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 20,
  },
  loadingText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  taglineContainer: {
    position: 'absolute',
    bottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagline: {
    fontSize: 18,
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    letterSpacing: 1,
    fontFamily: 'System',
  },
  emojiBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
  },
  starEmoji1: {
    position: 'absolute',
    top: '25%',
    left: '20%',
    fontSize: 28,
    color: 'rgba(255, 255, 255, 0.15)',
  },
  starEmoji2: {
    position: 'absolute',
    top: '60%',
    right: '25%',
    fontSize: 32,
    color: 'rgba(0, 212, 255, 0.12)',
  },
  starEmoji3: {
    position: 'absolute',
    top: '35%',
    right: '15%',
    fontSize: 24,
    color: 'rgba(255, 255, 255, 0.08)',
  },
  castleEmoji1: {
    position: 'absolute',
    top: '40%',
    left: '10%',
    fontSize: 38,
    color: 'rgba(0, 212, 255, 0.08)',
  },
  castleEmoji2: {
    position: 'absolute',
    top: '15%',
    right: '10%',
    fontSize: 32,
    color: 'rgba(255, 255, 255, 0.06)',
  },
});

//export default SplashScreen;


export default App;
