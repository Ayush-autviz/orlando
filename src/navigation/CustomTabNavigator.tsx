import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, MapPin, Star, Utensils, Bed, Menu, DoorOpen, Ticket } from 'lucide-react-native';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import ThemeParksScreen from '../screens/ThemeParksScreen';
import AttractionsScreen from '../screens/AttractionsScreen';
import DiningScreen from '../screens/DiningScreen';
import HotelsScreen from '../screens/HotelsScreen';
import DrawerContent from './DrawerContent';

const Tab = createBottomTabNavigator();

// Placeholder component for More tab
const MoreScreen: React.FC = () => <View style={{ flex: 1, backgroundColor: '#ffffff' }} />;

// Custom Tab Bar Component
const CustomTabBar: React.FC<any> = ({ state, navigation }) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-280)).current; // Start off-screen to the left

  const tabConfig = [
    { name: 'Home', label: 'Home', icon: Home },
    { name: 'ThemeParks', label: 'Parks', icon: DoorOpen },
    { name: 'Attractions', label: 'Attractions', icon: Ticket },
    { name: 'Dining', label: 'Dining', icon: Utensils },
    { name: 'Hotels', label: 'Hotels', icon: Bed },
    { name: 'More', label: 'More', icon: Menu },
  ];

  const handleTabPress = (routeName: string, index: number) => {
    if (routeName === 'More') {
      setIsDrawerVisible(true);
      // Reset animation value and animate drawer in from left
      slideAnim.setValue(-280);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      const event = navigation.emit({
        type: 'tabPress',
        target: state.routes[index].key,
        canPreventDefault: true,
      });

      if (!event.defaultPrevented) {
        navigation.navigate(routeName);
      }
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
        navigation.navigate('Home');
        break;
      case 'theme-parks':
        navigation.navigate('ThemeParks');
        break;
      case 'attractions':
        navigation.navigate('Attractions');
        break;
      case 'dining':
        navigation.navigate('Dining');
        break;
      case 'hotels':
        navigation.navigate('Hotels');
        break;
      default:
        // For other screens that aren't in the main tabs, keep current tab
        break;
    }
  };

  const renderTabIcon = (iconComponent: React.ComponentType<any>, isActive: boolean) => {
    const IconComponent = iconComponent;
    const color = isActive ? '#A47551' : '#6b7280';
    return <IconComponent size={24} color={color} />;
  };

  return (
    <>
      {/* Custom Tab Bar */}
      <SafeAreaView edges={['bottom']} style={styles.tabBarContainer}>
        <View style={styles.tabBar}>
          {tabConfig.map((tab, index) => {
            const isActive = state.index === index;
            return (
              <TouchableOpacity
                key={tab.name}
                style={styles.tabItem}
                onPress={() => handleTabPress(tab.name, index)}
                activeOpacity={0.7}
              >
                <View style={styles.tabIconContainer}>
                  {renderTabIcon(tab.icon, isActive)}
                </View>
                <Text style={[
                  styles.tabLabel,
                  { color: isActive ? '#A47551' : '#6b7280' }
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
    </>
  );
};

// Main Tab Navigator Component
const CustomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props: any) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ThemeParks" component={ThemeParksScreen} />
      <Tab.Screen name="Attractions" component={AttractionsScreen} />
      <Tab.Screen name="Dining" component={DiningScreen} />
      <Tab.Screen name="Hotels" component={HotelsScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
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
