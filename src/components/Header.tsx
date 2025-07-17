import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const Header: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            <Text style={styles.logoOrange}>Orlando</Text>
            <Text style={styles.logoTeal}>Guide</Text>
          </Text>
        </View>
        <View style={styles.tagline}>
          <Text style={styles.taglineText}>Your Ultimate Travel Companion</Text>
        </View>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'transparent',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  logoText: {
    fontSize: 28,
    fontWeight: '900',
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 6,
    letterSpacing: 1,
  },
  logoOrange: {
    color: '#f97316',
  },
  logoTeal: {
    color: '#0d9488',
    fontWeight: '300',
  },
  tagline: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  taglineText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

export default Header; 