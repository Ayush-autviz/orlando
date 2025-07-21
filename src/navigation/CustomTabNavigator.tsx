import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, MapPin, Star, Utensils, Bed, Menu, DoorOpen, Ticket } from 'lucide-react-native';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import ThemeParksScreen from '../screens/ThemeParksScreen';
import AttractionsScreen from '../screens/AttractionsScreen';
import DiningScreen from '../screens/DiningScreen';
import HotelsScreen from '../screens/HotelsScreen';
import DrawerContent from './DrawerContent';
import ShoppingDetailScreen from '../screens/ShoppingDetailScreen';
import ShoppingScreen from '../screens/ShoppingScreen';
import EventsScreen from '../screens/EventsScreen';
import NeighborhoodsScreen from '../screens/NeighborhoodsScreen';
import GolfScreen from '../screens/GolfScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Placeholder component for More tab
const MoreScreen: React.FC = () => <View style={{ flex: 1, backgroundColor: '#ffffff' }} />;

// Custom Tab Bar Component
const CustomTabBar: React.FC<any> = ({ state, navigation }) => {
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
      // Open drawer for More tab
      navigation.openDrawer();
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

  const renderTabIcon = (iconComponent: React.ComponentType<any>, isActive: boolean) => {
    const IconComponent = iconComponent;
    const color = isActive ? '#A47551' : '#6b7280';
    return <IconComponent size={24} color={color} />;
  };

  return (
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
  );
};

// Tab Navigator Component
const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props: any) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
      <Tab.Screen name="ThemeParks" component={ThemeParksScreen} />
      <Tab.Screen name="Attractions" component={AttractionsScreen} />
      <Tab.Screen name="Dining" component={DiningScreen} />
      <Tab.Screen name="Hotels" component={HotelsScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
};

// Custom drawer content component
const CustomDrawerContent = (props: any) => {
  const categories = [
    { id: 'Home', label: 'Home', icon: <Home size={24} color="#374151" />, color: '#f97316' },
    { id: 'ThemeParks', label: 'Theme Parks', icon: <MapPin size={24} color="#374151" />, color: '#3b82f6' },
    { id: 'Attractions', label: 'All Attractions', icon: <Star size={24} color="#374151" />, color: '#10b981' },
    { id: 'Hotels', label: 'Hotels', icon: <Bed size={24} color="#374151" />, color: '#f59e0b' },
    { id: 'Dining', label: 'Dining', icon: <Utensils size={24} color="#374151" />, color: '#ef4444' },
    { id: 'shopping', label: 'Shopping', icon: <MapPin size={24} color="#374151" />, color: '#8b5cf6' },
    { id: 'entertainment', label: 'Live Entertainment', icon: <Star size={24} color="#374151" />, color: '#06b6d4' },
    { id: 'things-to-do', label: 'Things to Do', icon: <Star size={24} color="#374151" />, color: '#84cc16' },
    { id: 'golf', label: 'Golf', icon: <MapPin size={24} color="#374151" />, color: '#f97316' },
    { id: 'sports', label: 'Sports', icon: <Star size={24} color="#374151" />, color: '#ec4899' },
    { id: 'neighborhoods', label: 'Neighborhoods', icon: <MapPin size={24} color="#374151" />, color: '#6366f1' },
    { id: 'spas', label: 'Spas & Wellness', icon: <Star size={24} color="#374151" />, color: '#10b981' },
    { id: 'nightlife', label: 'Nightlife', icon: <Star size={24} color="#374151" />, color: '#8b5cf6' },
  ];

  const handleCategoryPress = (categoryId: string) => {
    console.log('categoryId', categoryId);
    
    // Navigate to tab screens by going to TabNavigator first, then the specific tab
    if (['Home', 'ThemeParks', 'Attractions', 'Dining', 'Hotels'].includes(categoryId)) {
      // For tab screens, use nested navigation
      props.navigation.navigate('TabNavigator', {
        screen: categoryId
      });
    } else {
      props.navigation.navigate(categoryId);
    }
    
    props.navigation.closeDrawer();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            <Text style={styles.logoOrange}>Orlando</Text>
            <Text style={styles.logoTeal}>Guide</Text>
          </Text>
        </View>
      </View>

      <View style={styles.scrollView}>
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryItem}
              onPress={() => handleCategoryPress(category.id)}
            >
              <View style={styles.categoryIcon}>
                {category.icon}
              </View>
              <Text style={styles.categoryLabel}>{category.label}</Text>
              <View style={[styles.categoryAccent, { backgroundColor: category.color }]} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Your Ultimate Orlando Guide</Text>
        <Text style={styles.footerSubtext}>Discover the magic of Orlando</Text>
      </View>
    </SafeAreaView>
  );
};

// Main Tab Navigator Component with Drawer
const CustomTabNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#ffffff',
          width: 280,
        },
        drawerType: 'front',
      }}
    >
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
      <Drawer.Screen name="shopping" component={ShoppingScreen} />
      <Drawer.Screen name="entertainment" component={EventsScreen} />
      <Drawer.Screen name="things-to-do" component={AttractionsScreen} />
      <Drawer.Screen name="golf" component={GolfScreen} />
      <Drawer.Screen name="sports" component={AttractionsScreen} />
      <Drawer.Screen name="neighborhoods" component={NeighborhoodsScreen} />
      <Drawer.Screen name="spas" component={AttractionsScreen} />
      <Drawer.Screen name="nightlife" component={AttractionsScreen} />
    </Drawer.Navigator>
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
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoOrange: {
    color: '#f97316',
  },
  logoTeal: {
    color: '#0d9488',
    fontWeight: '300',
  },
  scrollView: {
    flex: 1,
  },
  categoriesContainer: {
    paddingVertical: 20,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
    position: 'relative',
  },
  categoryIcon: {
    marginRight: 16,
    width: 40,
    alignItems: 'center',
  },
  categoryLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    flex: 1,
  },
  categoryAccent: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    backgroundColor: '#f9fafb',
  },
  footerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
    marginBottom: 4,
  },
  footerSubtext: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
  },
});

export default CustomTabNavigator;
