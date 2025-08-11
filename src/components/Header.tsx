import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Menu, ArrowRight } from 'lucide-react-native';
import AnimatedGradientLogo from './AnimatedGradientLogo';

interface HeaderProps {
  title?: string;
  showDrawerButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showDrawerButton = false }) => {
  const navigation = useNavigation();

  const handleDrawerPress = () => {
    navigation.openDrawer();
  };

  const handleLogoPress = () => {
    navigation.navigate('TabNavigator', { screen: 'Home' });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        {showDrawerButton && (
          <TouchableOpacity
            style={styles.drawerButton}
            onPress={handleDrawerPress}
            activeOpacity={0.7}
          >
            <Menu size={24} color="#374151" />
          </TouchableOpacity>
        )}
        

        <TouchableOpacity style={styles.logoContainer} onPress={handleLogoPress} activeOpacity={0.7}>
          {/* <AnimatedGradientLogo fontSize={20} width={91} /> */}
          {/* <TouchableOpacity style={{flex:1, alignItems: 'center', justifyContent: 'center'}} onPress={handleLogoPress} activeOpacity={0.7}> */}
            <Image source={require('../../assets/icon/logo.png')} style={{width: showDrawerButton ? '65%' : '50%', height: 25, resizeMode: 'contain'}} resizeMode="contain" />
          {/* </TouchableOpacity> */}
        </TouchableOpacity>

        {/* Invisible spacer to balance the drawer button */}
        {showDrawerButton && (
          <View style={styles.spacer} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 0,
    paddingBottom: 12,
    backgroundColor: '#ffffff',
  },
  drawerButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f3f4f6',
    marginRight: 12,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  spacer: {
    width: 40,
    height: 40,
  },
  // logo: {
  //   width: showDrawerButton ? '75%' : '50%',
  //   height: 25,
  //   resizeMode: 'contain',
  // },
});

export default Header; 