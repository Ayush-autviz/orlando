import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Home, MapPin, Star, Utensils, Bed, Calendar, Menu } from 'lucide-react-native';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import ThemeParksScreen from '../screens/ThemeParksScreen';
import AttractionsScreen from '../screens/AttractionsScreen';
import DiningScreen from '../screens/DiningScreen';
import HotelsScreen from '../screens/HotelsScreen';
import EventsScreen from '../screens/EventsScreen';
import DrawerContent from './DrawerContent';

const { width } = Dimensions.get('window');

interface TabItem {
  name: string;
  label: string;
  icon: React.ComponentType<any>;
  component: React.ComponentType<any>;
}

const tabs: TabItem[] = [
  { name: 'Home', label: 'Home', icon: Home, component: HomeScreen },
  { name: 'Theme Parks', label: 'Parks', icon: MapPin, component: ThemeParksScreen },
  { name: 'Attractions', label: 'Attractions', icon: Star, component: AttractionsScreen },
  { name: 'Dining', label: 'Dining', icon: Utensils, component: DiningScreen },
  { name: 'Hotels', label: 'Hotels', icon: Bed, component: HotelsScreen },
  { name: 'More', label: 'More', icon: Menu, component: View }, // Placeholder component for More
];

const CustomTabNavigator: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-280)).current; // Start off-screen to the left

  const handleTabPress = (tabName: string) => {
    if (tabName === 'More') {
      setIsDrawerVisible(true);
      // Reset animation value and animate drawer in from left
      slideAnim.setValue(-280);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setActiveTab(tabName);
    }
  };

  const closeDrawer = () => {
    // Animate drawer out to the left
    Animated.timing(slideAnim, {
      toValue: -280,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsDrawerVisible(false);
    });
  };

  const handleDrawerNavigation = (screenName: string) => {
    closeDrawer();
    // Handle navigation to different screens based on drawer selection
    switch (screenName) {
      case 'home':
        setActiveTab('Home');
        break;
      case 'theme-parks':
        setActiveTab('Theme Parks');
        break;
      case 'attractions':
        setActiveTab('Attractions');
        break;
      case 'dining':
        setActiveTab('Dining');
        break;
      case 'hotels':
        setActiveTab('Hotels');
        break;
      default:
        // For other screens that aren't in the main tabs, keep current tab
        break;
    }
  };

  const renderActiveScreen = () => {
    const activeTabData = tabs.find(tab => tab.name === activeTab);
    if (activeTabData && activeTabData.component !== View) {
      const Component = activeTabData.component;
      return <Component />;
    }
    return <View style={{ flex: 1, backgroundColor: '#ffffff' }} />;
  };

  const renderTabIcon = (tab: TabItem, isActive: boolean) => {
    const IconComponent = tab.icon;
    const color = isActive ? '#f97316' : '#6b7280';
    return <IconComponent size={24} color={color} />;
  };

  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.content}>
        {renderActiveScreen()}
      </View>

      {/* Custom Tab Bar */}
      <SafeAreaView edges={['bottom']} style={styles.tabBarContainer}>
        <View style={styles.tabBar}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.name;
            return (
              <TouchableOpacity
                key={tab.name}
                style={styles.tabItem}
                onPress={() => handleTabPress(tab.name)}
                activeOpacity={0.7}
              >
                <View style={styles.tabIconContainer}>
                  {renderTabIcon(tab, isActive)}
                </View>
                <Text style={[
                  styles.tabLabel,
                  { color: isActive ? '#f97316' : '#6b7280' }
                ]}>
                  {tab.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>

      {/* Drawer Modal */}
      <Modal
        visible={isDrawerVisible}
        transparent={true}
        animationType="none"
        onRequestClose={closeDrawer}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={closeDrawer}
        >
          <Animated.View
            style={[
              styles.drawerContainer,
              { transform: [{ translateX: slideAnim }] }
            ]}
          >
            <TouchableOpacity
              activeOpacity={1}
              style={styles.drawerContent}
              onPress={() => {}} // Prevent event bubbling
            >
              <DrawerContent
                onNavigate={handleDrawerNavigation}
                onClose={closeDrawer}
              />
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
  },
  tabBarContainer: {
    backgroundColor: '#ffffff',
    borderTopWidth: 0.5,
    borderTopColor: '#e5e7eb',
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 0,
    height: 47,
    backgroundColor: '#ffffff',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  tabIconContainer: {
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawerContainer: {
    width: 280,
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
  },
  drawerContent: {
    flex: 1,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default CustomTabNavigator;
