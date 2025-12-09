import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated, StatusBar } from 'react-native';
import { WhiteLabelConfig } from '../WhiteLabelConfig';

interface SplashScreenProps {
  onAnimationComplete?: () => void;
  fadeOut?: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationComplete, fadeOut = false }) => {
  // Animation refs used in UI
  const overlayOpacity = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    runIntroAnimation();
  }, []);

  useEffect(() => {
    if (fadeOut) {
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }
  }, [fadeOut]);

  const runIntroAnimation = () => {
    fadeAnim.setValue(0);
    scaleAnim.setValue(0.3);
    rotateAnim.setValue(0);
    logoOpacity.setValue(0);

    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),

      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1.2,
          tension: 15,
          friction: 4,
          useNativeDriver: true,
        }),

        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),

        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        })
      ]),
    ]).start();

    // Pulse loop
    const pulse = () => {
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.25,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 900,
          useNativeDriver: true,
        }),
      ]).start(() => pulse());
    };

    setTimeout(pulse, 2200);

    // End splash after 4 seconds
    setTimeout(() => {
      onAnimationComplete?.();
    }, 4000);
  };

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={[styles.overlayContainer, { opacity: overlayOpacity }]}>
      <StatusBar barStyle="light-content" backgroundColor={WhiteLabelConfig.colors.drawerButtonBackground} />

      {/* Background */}
      <View style={styles.background} />

      {/* Center content */}
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <Animated.View
          style={[
            styles.logoContainer,
            {
              transform: [{ scale: scaleAnim }, { rotate: spin }],
              opacity: logoOpacity,
            },
          ]}
        >
          <Image
            source={WhiteLabelConfig.appLogo}
            style={styles.logo}
            resizeMode="contain"
          />
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    flex: 1,
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    zIndex: 9999,
    backgroundColor: WhiteLabelConfig.colors.primary,
  },

  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: WhiteLabelConfig.colors.background,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
  },

  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

export default SplashScreen;
