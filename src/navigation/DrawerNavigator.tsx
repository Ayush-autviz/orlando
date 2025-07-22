import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  MapPin, 
  Star, 
  Building, 
  Utensils, 
  ShoppingCart, 
  Calendar, 
  Beer, 
  Flag, 
  Leaf,
  Home,
  X
} from 'lucide-react-native';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import ThemeParksScreen from '../screens/ThemeParksScreen';
import AttractionsScreen from '../screens/AttractionsScreen';
import DiningScreen from '../screens/DiningScreen';
import HotelsScreen from '../screens/HotelsScreen';
import EventsScreen from '../screens/EventsScreen';
import NeighborhoodsScreen from '../screens/NeighborhoodsScreen';
import ShoppingScreen from '../screens/ShoppingScreen';
import GolfScreen from '../screens/GolfScreen';

const Drawer = createDrawerNavigator();

// Custom drawer content component
const CustomDrawerContent = (props: any) => {
  const categories = [
    { id: 'home', label: 'Home', icon: <Home size={24} color="#374151" />, color: '#f97316' },
    { id: 'theme-parks', label: 'Theme Parks', icon: <MapPin size={24} color="#374151" />, color: '#3b82f6' },
    { id: 'attractions', label: 'All Attractions', icon: <Star size={24} color="#374151" />, color: '#10b981' },
    { id: 'hotels', label: 'Hotels', icon: <Building size={24} color="#374151" />, color: '#f59e0b' },
    { id: 'dining', label: 'Dining', icon: <Utensils size={24} color="#374151" />, color: '#ef4444' },
    { id: 'shopping', label: 'Shopping', icon: <ShoppingCart size={24} color="#374151" />, color: '#8b5cf6' },
    { id: 'entertainment', label: 'Live Entertainment', icon: <Calendar size={24} color="#374151" />, color: '#06b6d4' },
    // { id: 'things-to-do', label: 'Things to Do', icon: <Star size={24} color="#374151" />, color: '#84cc16' },
    // { id: 'golf', label: 'Golf', icon: <Flag size={24} color="#374151" />, color: '#f97316' },
    // { id: 'sports', label: 'Sports', icon: <Star size={24} color="#374151" />, color: '#ec4899' },
    // { id: 'neighborhoods', label: 'Neighborhoods', icon: <MapPin size={24} color="#374151" />, color: '#6366f1' },
    // { id: 'spas', label: 'Spas & Wellness', icon: <Leaf size={24} color="#374151" />, color: '#10b981' },
    // { id: 'nightlife', label: 'Nightlife', icon: <Beer size={24} color="#374151" />, color: '#8b5cf6' },
  ];

  const handleCategoryPress = (categoryId: string) => {
    console.log('categoryId', categoryId);
    props.navigation.navigate(categoryId);
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
        <TouchableOpacity 
          style={styles.closeButton}
          onPress={() => props.navigation.closeDrawer()}
        >
          <X size={24} color="#374151" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
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
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Your Ultimate Orlando Guide</Text>
        <Text style={styles.footerSubtext}>Discover the magic of Orlando</Text>
      </View>
    </SafeAreaView>
  );
};

const DrawerNavigator = () => {
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
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="theme-parks" component={ThemeParksScreen} />
      <Drawer.Screen name="attractions" component={AttractionsScreen} />
      <Drawer.Screen name="hotels" component={HotelsScreen} />
      <Drawer.Screen name="dining" component={DiningScreen} />
      <Drawer.Screen name="shopping" component={ShoppingScreen} />
      {/* <Drawer.Screen name="entertainment" component={EventsScreen} />
      <Drawer.Screen name="things-to-do" component={AttractionsScreen} />
      <Drawer.Screen name="golf" component={GolfScreen} />
      <Drawer.Screen name="sports" component={AttractionsScreen} />
      <Drawer.Screen name="neighborhoods" component={NeighborhoodsScreen} />
      <Drawer.Screen name="spas" component={AttractionsScreen} />
      <Drawer.Screen name="nightlife" component={AttractionsScreen} /> */}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
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
  closeButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
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

export default DrawerNavigator; 