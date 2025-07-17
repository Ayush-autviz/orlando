import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { 
  MapPin, 
  Star, 
  Building, 
  Utensils, 
  ShoppingCart, 
  Calendar, 
  Beer, 
  Flag, 
  Leaf 
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

interface CategoryButton {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const CategoryButtons: React.FC = () => {
  const categories: CategoryButton[] = [
    { id: 'theme-parks', title: 'Theme Parks', icon: <MapPin size={20} color="#ffffff" /> },
    { id: 'attractions', title: 'Attractions', icon: <Star size={20} color="#ffffff" /> },
    { id: 'hotels', title: 'Hotels', icon: <Building size={20} color="#ffffff" /> },
    { id: 'dining', title: 'Dining', icon: <Utensils size={20} color="#ffffff" /> },
    { id: 'shopping', title: 'Shopping', icon: <ShoppingCart size={20} color="#ffffff" /> },
    { id: 'entertainment', title: 'Live Entertainment', icon: <Calendar size={20} color="#ffffff" /> },
    { id: 'bar-hop', title: 'Locals Bar Hop', icon: <Beer size={20} color="#ffffff" /> },
    { id: 'golf', title: 'Golf', icon: <Flag size={20} color="#ffffff" /> },
    { id: 'spas', title: 'Spas', icon: <Leaf size={20} color="#ffffff" /> },
    { id: 'neighborhoods', title: 'Neighborhoods', icon: <MapPin size={20} color="#ffffff" /> },
  ];

  const handleCategoryPress = (categoryId: string) => {
    console.log('Category pressed:', categoryId);
    // TODO: Navigate to category screen
  };

  return (
    <View style={styles.container}>
      {/* Background Image with Blur Effect */}
      <View style={styles.backgroundContainer}>
        <View style={styles.backgroundImage} />
      </View>
      
      {/* Category Buttons */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryButton}
            onPress={() => handleCategoryPress(category.id)}
          >
            <View style={styles.iconContainer}>
              {category.icon}
            </View>
            <Text style={styles.categoryText}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingVertical: 20,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    top: -50,
    left: -50,
    right: -50,
    bottom: -50,
    backgroundColor: '#0d9488', // Teal background
    opacity: 0.8,
    transform: [{ scale: 1.1 }],
  },
  scrollView: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    gap: 12,
  },
  categoryButton: {
    backgroundColor: '#0d9488', // Teal color
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    marginBottom: 4,
  },
  categoryText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default CategoryButtons; 