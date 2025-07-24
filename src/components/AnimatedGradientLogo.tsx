import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

interface AnimatedGradientLogoProps {
  fontSize?: number;
  width?: number;
}

const AnimatedGradientLogo: React.FC<AnimatedGradientLogoProps> = ({ 
  fontSize = 20,
  width
}) => {
  const GradientText = ({ children, colors, textWidth }: { children: string; colors: string[]; textWidth?: number }) => {
    return (
      <MaskedView
        style={[
          styles.maskedView, 
          { 
            height: fontSize * 1.2,
            width: textWidth || (fontSize * children.length * 0.6) // Auto-calculate based on text length if no width provided
          }
        ]}
        maskElement={
          <View style={styles.maskElementView}>
            <Text style={[styles.maskElementText, { fontSize, lineHeight: fontSize * 1.2 }]}>
              {children}
            </Text>
          </View>
        }
      >
        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        />
      </MaskedView>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <GradientText 
          colors={['#f97316', '#0d9488', '#f97316']}
          textWidth={width}
        >
          Awesome
        </GradientText>
        {/* <View style={styles.spacer} /> */}
        <GradientText 
          colors={['#0d9488', '#f97316', '#0d9488']}
          textWidth={width}
        >
          Orlando
        </GradientText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacer: {
    width: 1,
  },
  maskedView: {
    //flex: 1,
    //width:91
  },
  maskElementView: {
    // Transparent background because mask is based off alpha channel
    alignItems: 'center',
    backgroundColor: 'transparent',
   // flex: 1,
    justifyContent: 'center',
  },
  maskElementText: {
    color: 'black', // Opaque color to define the mask shape
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gradient: {
   // flex: 1,
    height: '100%',
  },
});

export default AnimatedGradientLogo; 