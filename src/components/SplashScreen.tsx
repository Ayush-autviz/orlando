import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated, StatusBar } from 'react-native';
import { WhiteLabelConfig } from '../WhiteLabelConfig';

interface SplashScreenProps {
  onAnimationComplete?: () => void;
  fadeOut?: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationComplete, fadeOut = false }) => {

  const overlayOpacity = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;
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
    logoOpacity.setValue(0);

    // New smooth zoom animation (no rotation)
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),

      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1.15, // Zoom in
          duration: 900,
          useNativeDriver: true,
        }),

        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),

      Animated.timing(scaleAnim, {
        toValue: 1.0, // zoom-out to normal
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        onAnimationComplete?.();
      }, 500);
    });
  };

  return (
    <Animated.View style={[styles.overlayContainer, { opacity: overlayOpacity }]}>
      <StatusBar barStyle="light-content" backgroundColor={WhiteLabelConfig.colors.drawerButtonBackground} />

      <View style={styles.background} />

      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <Animated.View
          style={[
            styles.logoContainer,
            { transform: [{ scale: scaleAnim }], opacity: logoOpacity }
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
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

export default SplashScreen;
