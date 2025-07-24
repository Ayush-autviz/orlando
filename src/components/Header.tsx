import React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Menu } from 'lucide-react-native';
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
        
        <View style={styles.logoContainer}>
          <AnimatedGradientLogo fontSize={20} width={91} />
        </View>

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
    paddingVertical: 12,
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
});

export default Header; 