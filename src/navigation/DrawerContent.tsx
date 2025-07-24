import React from 'react';
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
import AnimatedGradientLogo from '../components/AnimatedGradientLogo';

interface DrawerContentProps {
  navigation: any;
  onClose: () => void;
}

const DrawerContent: React.FC<DrawerContentProps> = ({ navigation, onClose }) => {
  const categories = [
    { id: 'theme-parks', label: 'Theme Parks', icon: <Building size={24} color="#A855F7" />, color: '#A855F7' },
    { id: 'attractions', label: 'Attractions', icon: <Star size={24} color="#EF4444" />, color: '#EF4444' },
    { id: 'hotels', label: 'Hotels', icon: <Building size={24} color="#3B82F6" />, color: '#3B82F6' },
    { id: 'dining', label: 'Dining', icon: <Utensils size={24} color="#F59E0B" />, color: '#F59E0B' },
    { id: 'shopping', label: 'Shopping', icon: <ShoppingCart size={24} color="#10B981" />, color: '#10B981' },
    { id: 'entertainment', label: 'Live Entertainment', icon: <Calendar size={24} color="#8B5CF6" />, color: '#8B5CF6' },
    { id: 'golf', label: 'Golf', icon: <Flag size={24} color="#059669" />, color: '#059669' },
    { id: 'neighborhoods', label: 'Neighborhoods', icon: <MapPin size={24} color="#DC2626" />, color: '#DC2626' },
    { id: 'nightlife', label: 'Nightlife', icon: <Beer size={24} color="#7C3AED" />, color: '#7C3AED' },
    { id: 'spas', label: 'Spas', icon: <Leaf size={24} color="#16A34A" />, color: '#16A34A' },
  ];

  const handleCategoryPress = (categoryId: string) => {
    navigation.navigate(categoryId);
    onClose();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <AnimatedGradientLogo fontSize={20} width={91} />
        </View>
        <TouchableOpacity 
          style={styles.closeButton}
          onPress={onClose}
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
    flex: 1,
  },
  closeButton: {
    padding: 8,
    borderRadius: 8,
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

export default DrawerContent;
