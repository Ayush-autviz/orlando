import React, { useEffect, useRef } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BallIndicator } from 'react-native-indicators';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

interface SplashScreenProps {
  onAnimationComplete?: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationComplete }) => {
  const navigation = useNavigation();

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
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

    // Complete animation after 4 seconds - keep everything visible
    setTimeout(() => {
      // Just hide the loading text, keep everything else visible
      Animated.timing(indicatorOpacity, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        // Navigate to Main screen after a short delay to let user see the final state
        setTimeout(() => {
          navigation.navigate('Main' as never);
          // Call the callback if provided (for backward compatibility)
          if (onAnimationComplete) {
            onAnimationComplete();
          }
        }, 2000); // 2 more seconds to admire the final animated state
      });
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
    <SafeAreaView style={styles.container}>
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
                opacity: logoOpacity,
              },
            ]}
          >
            <Image
              source={require('../../assets/icon/logo.png')}
              style={styles.logo}
              resizeMode="contain"
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default SplashScreen;
