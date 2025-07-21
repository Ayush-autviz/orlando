import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Menu } from 'lucide-react-native';

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
          <Text style={styles.logoText}>
            <Text style={styles.logoOrange}>Orlando</Text>
            <Text style={styles.logoTeal}>Guide</Text>
          </Text>
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
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoOrange: {
    color: '#f97316',
  },
  logoTeal: {
    color: '#0d9488',
    fontWeight: '300',
  },
  titleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: -1,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
  },
  spacer: {
    width: 40,
    height: 40,
  },
});

export default Header; 